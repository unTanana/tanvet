import type { App } from "firebase-admin/app";
import { applicationDefault, getApps, initializeApp } from "firebase-admin/app";
import type { Firestore } from "firebase-admin/firestore";
import { getFirestore } from "firebase-admin/firestore";
import z, { string } from "zod";
import { parseIntString } from "~/util/parse-numeric-string";

let firebase: App | undefined;
let firestoreDb: Firestore;

if (!getApps().length) {
  firebase = initializeApp({
    credential: applicationDefault(),
    databaseURL: process.env.FIREBASE_DB_URL,
  });
  firestoreDb = getFirestore(firebase);
  firestoreDb.settings({ ignoreUndefinedProperties: true });
} else {
  firebase = getApps()[0];
  firestoreDb = getFirestore(firebase);
}

export { firestoreDb };

export const DogInputObject = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  thumbnail: z.string().min(1),
  age: z.string().transform(parseIntString),
  breed: z.string().min(1),
  color: z.string().min(1),
});

export type DogInput = z.infer<typeof DogInputObject>;

const PetObject = z.object({
  id: string(),
  name: z.string(),
  age: z.number(),
  breed: z.string(),
  color: z.string(),
  description: z.string().optional(),
  thumbnail: z.string(),
  images: z.array(z.string()).optional(),
  likes: z.number(),
});

const PetObjectArray = z.array(PetObject);

export type Pet = z.infer<typeof PetObject>;

export const getAllDogs = async (): Promise<Pet[]> => {
  const dogResponse = await firestoreDb.collection("dogs").get();
  return PetObjectArray.parse(
    dogResponse.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  );
};

export const getDogById = async (id: string): Promise<Pet> => {
  const dog = await firestoreDb.collection("dogs").doc(id).get();
  return PetObject.parse({ ...dog.data(), id: dog.id });
};

export const createDog = async (dog: DogInput): Promise<string> => {
  // random number of likes between 1 and 3
  const likes = Math.floor(Math.random() * 3) + 1;

  const dogDoc = await firestoreDb.collection("dogs").add({ ...dog, likes });
  return dogDoc.id;
};

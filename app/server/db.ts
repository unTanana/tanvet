import type { App } from "firebase-admin/app";
import { applicationDefault, getApps, initializeApp } from "firebase-admin/app";
import type { Firestore } from "firebase-admin/firestore";
import { getFirestore } from "firebase-admin/firestore";
import z, { string } from "zod";

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

export const createDog = async (dog: Omit<Pet, "id">): Promise<Pet> => {
  const dogDoc = await firestoreDb.collection("dogs").add(dog);
  return PetObject.parse({ ...dog, id: dogDoc.id });
};

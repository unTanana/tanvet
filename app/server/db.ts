import type { App } from "firebase-admin/app";
import { applicationDefault, getApps, initializeApp } from "firebase-admin/app";
import type { Firestore } from "firebase-admin/firestore";
import { getFirestore } from "firebase-admin/firestore";
import z from "zod";

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
  name: z.string(),
  age: z.number(),
  breed: z.string(),
  color: z.string(),
  description: z.string().optional(),
});

const PetObjectArray = z.array(PetObject);

export type Pet = z.infer<typeof PetObject>;

export const getAllDogs = async (): Promise<Pet[]> => {
  const dogs = await firestoreDb.collection("dogs").get();
  return PetObjectArray.parse(
    dogs.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  );
};

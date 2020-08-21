import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAgvgRP4JWSsDK0eEq7-_N-_RVWyvU4bzk",
    authDomain: "e-commerce-43912.firebaseapp.com",
    databaseURL: "https://e-commerce-43912.firebaseio.com",
    projectId: "e-commerce-43912",
    storageBucket: "e-commerce-43912.appspot.com",
    messagingSenderId: "611694343284",
    appId: "1:611694343284:web:f7bb940c20e16e598acd21"
  };

firebase.initializeApp(config);

export const createUser = async(userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = fireStore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set(
                {
                displayName,
                email,
                createdAt,
                ...additionalData
            }
            );
        }catch(error){
            console.log("error while adding user: ", error.message);
        }
    }
    return userRef;
}


export const auth = firebase.auth();
export const fireStore = firebase.firestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = fireStore.collection(collectionKey);

  const batch = fireStore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt': 'select_account'});

export const signInwithgoogle = () => auth.signInWithPopup(provider);

export default firebase;
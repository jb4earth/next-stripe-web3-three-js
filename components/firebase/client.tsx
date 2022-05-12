const { initializeApp,cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');

try{
  initializeApp( {
   apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
   projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
});
}catch{console.log('app already initiallized')}


const firestore = getFirestore();
try {firestore.settings({ ignoreUndefinedProperties: true})}
catch {''}

export {firestore};

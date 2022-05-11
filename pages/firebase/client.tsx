const { initializeApp,cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../../utils/db/serviceAccountKey.json');

try{initializeApp({ credential: cert(serviceAccount) });
}catch{console.log('app already initiallized')}


const firestore = getFirestore();
try {firestore.settings({ ignoreUndefinedProperties: true})}
catch {''}

export {firestore};

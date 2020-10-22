const cors = require('cors');
const admin = require('../config/admin');
const firestore = admin.firestore();

const controller = require('express');

//controller.use(cors({ origin: true }));


const resolverFunctions = {
    Query: {
        hi: async () => {
            let name;
            const collecRef = firestore.collection('collection');
            let data = await collecRef.doc('doc').get().then(doc => {
                name = doc.data().name;
            })
            return name;
        },
    }
};

module.exports = resolverFunctions;

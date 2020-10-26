import * as firebase from 'firebase'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database()

//Setting up Google Authenticator
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }






 
// Firebase code testing

// //child_remove
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//                     expenses.push({
//                         id: childSnapshot.key,
//                         ...childSnapshot.val()
//                     })
//                 })
        
//                 console.log(expenses)
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses)
//     })


// database.ref('expenses').push({
//     description: 'Coffee',
//     note: 'morning coffee',
//     amount: 500,
//     createdAt: 5454876546
// })

// database.ref('notes').push({
//     title: 'Course',
//     body: 'Go for a run'
// })
 
// const firebaseNotes = {
//     notes: {
//         apoijasdf: {
//             title: 'First note',
//             body: 'This is my note'
//         },
//         apoijasdfpoijwe: {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'
// }, {
//     id: '761ae',
//     title: 'Another note',
//     body: 'This is my note'
// }]

// database.ref('notes').set(notes)

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })

// database.ref().set({
//     name: 'Michael Smith',
//     age: 25,
//     isSingle: true,
//     location: {
//         city: 'Hemet',
//         country: 'United States'
//     },

// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed.', e)
// })

// // database.ref().set('This is my data')

// // database.ref('attributes').set(
// //     {
// //         height: 73,
// //         weight: 272
// //     }
// // ).then(() => {
// //     console.log('Data was updated')
// // }).catch((e) => {
// //     console.log('This failed', e)
// // })

// // database.ref('isSingle')
// //     .remove()
// //     .then(() => {
// //         console.log('Data was removed')
// //     }).catch((e) => {
// //         console.log('This failed', e)
// //     })

// database.ref().update({
//     name: 'Mike',
//     age: 26,
//     job: 'Software Developer',
//     isSingle: null
// })
// подключение к firebase

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBl04SaYWV0qKrWRSxai5porFj2TKP_A1M",
    authDomain: "zubko-6d7f7.firebaseapp.com",
    databaseURL: "https://zubko-6d7f7.firebaseio.com",
    projectId: "zubko-6d7f7",
    storageBucket: "",
    messagingSenderId: "1080596175709",
    appId: "1:1080596175709:web:7a3c5d8f50723ac4"
};
// создаем переменную в которой будет храниться firebaseApp с конфигом
export const firebaseApp = firebase.initializeApp(firebaseConfig);
// создаем для использования БД и events-таблица записей в БД
export const eventRef = firebaseApp.database().ref().child('events');
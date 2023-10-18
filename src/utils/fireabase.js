import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, push } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Função para criar dados em uma referência específica
function createData(path, data) {
  const db = getDatabase();
  const dbRef = ref(db, path);

  try {
    const newChildRef = push(dbRef); // Gera um novo ID automaticamente
    set(newChildRef, data);
  } catch (error) {
    console.error("Erro ao criar dados:", error);
    throw error;
  }
}

// Função para ler todos os dados em uma referência específica
async function readData(path) {
  const dbRef = ref(db, path);

  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const dataValue = snapshot.val();
      const jsonArray = [];

      for (const key in dataValue) {
        if (dataValue.hasOwnProperty(key)) {
          const item = dataValue[key];
          item.id = key;
          jsonArray.push(item);
        }
      }
      return jsonArray;
    } else {
      console.error("Não foram encontrados dados na referência:", path);
      return null;
    }
  } catch (error) {
    console.error("Erro ao ler dados:", error);
    throw error;
  }
}

export { createData, readData };
export default db;

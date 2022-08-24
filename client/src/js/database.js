import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// put database method
export const putDb = async (content) => {
  console.log("PUT to the database");
  const jateDB = await openDB("jate", 1);
  const jateReadWrite = jateDB.transaction("jate", "readwrite");
  const jateStore = jateReadWrite.objectStore("jate");
  const request = jateStore.put({ id: 1, value: DBContent });
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};
// get all database method
export const getDb = async () => {
  console.log("GET from the database");
  const jateDB = await openDB("jate", 1);
  const jateReadWrite = jateDB.transaction("jate", "readonly");
  const jateStore = jateReadWrite.objectStore("jate");
  const request = jateStore.getAll(1);
  const result = await request;
  console.log("result.value", result);
  return result;
};

initdb();

let DB_NAME = 'heroes';
let DB_VERSION = 1;
let db: IDBDatabase

const filterName = 'id';
const filter = 'id';


//Записываем данные в таблицу
export function setDataToIndexDb<TData>(db: IDBDatabase, data: TData, name: string): void {
    const selectesObjectStore = db
        .transaction(name, "readwrite")
        .objectStore(name);
    (data as []).forEach((item) => {
        selectesObjectStore.add(item);
    });
}

// Создаем db
export function createIndexDb<TData>({ name, data }: { name: string, data: TData }): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {

        let request = window.indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = e => {
            console.error('Error opening db', e);
            reject('Error');
        };

        request.onsuccess = (event) => {
            db = (event.target as IDBOpenDBRequest).result
            resolve((event.target as IDBOpenDBRequest).result);
        };

        // Если версия изменилась, то создаем ObjectStores
        request.onupgradeneeded = async (event) => {
            db = (event.target as IDBOpenDBRequest).result;

            const objectStore = db.createObjectStore(name, { autoIncrement: true });
            objectStore.createIndex(filterName, filter, { unique: true });

            // Записываем данные после создания таблиц
            objectStore.transaction.oncomplete = async () => {
                // Store values in the newly created objectStore.
                setDataToIndexDb<TData>(db, data, name);
            }
        };
    });
}

// Получаем данные из таблицы
export const getDataFromIndexDb = ({ name, dbResult }: { name: string, dbResult: IDBDatabase }) => {
    dbResult
        .transaction(name)
        .objectStore(name)
        .getAll().onsuccess = (event) => {
            console.log((event.target as IDBOpenDBRequest).result);
        };
}

// Обновляет данные в таблице
export const updateIndexDbData = <TData>({ name, dbResult, data }: { name: string, dbResult: IDBDatabase, data: TData[] }) => {
    const objectStore = dbResult
        .transaction(name, "readwrite")
        .objectStore(name)

    const request = objectStore.getAll();

    request.onsuccess = (event) => {
        data.forEach((item, id) => {
            objectStore.put(item, id);
        });

    }
}
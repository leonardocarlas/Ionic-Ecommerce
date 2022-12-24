/* eslint-disable no-underscore-dangle */
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { collection, addDoc, Firestore, doc, getDoc, query, where, getDocs} from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { Tshirt } from 'src/assets/models/tshirt';
import { toNumberIds } from 'src/assets/utils/utils';

// export const app = initializeApp(environment.firebase);
// export const db = getFirestore(app);

// Singleton
class FirestoreDB {

    private _app;
    private _db;
    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    constructor() {
        this._app = initializeApp(environment.firebase);
        this._db = getFirestore(this._app);
    }

    // public async writeDoc() {
    //     try {
    //         // eslint-disable-next-line @typescript-eslint/quotes
    //         const docRef = await addDoc(collection(this._db, "marco"), {
    //         first: 'Ada',
    //         last: 'Lovelace',
    //         born: 1815
    //         });
    //         console.log('Document written with ID: ', docRef.id);
    //     } catch (e) {
    //         console.error('Error adding document: ', e);
    //     }
    // }

    public async getBasketballTshirts(): Promise<Tshirt[]> {
        const basketballTshirts: Tshirt[] = [];
        const q = query(collection(this._db, 'basketball-shirts'));
        const querySnapshot = await getDocs(q);
        try {
            querySnapshot.forEach((d) => {
                basketballTshirts.push(d.data() as Tshirt);
            });
        } catch (e) {
            console.error('Error adding document: ', e);
        }
        return basketballTshirts;
    };

    public async getBasketballTshirtById(idProduct: number): Promise<Tshirt> {
        let tshirt = {} as Tshirt;
        const q = query(collection(this._db,'basketball-shirts'));
        const querySnapshot = await getDocs(q);
        try {
            querySnapshot.forEach((d) => {
                // console.log(d.id, ' => ', d.data());
                const document = d.data() as Tshirt;
                // eslint-disable-next-line eqeqeq
                if (document.idProduct == idProduct) {
                    tshirt = document;
                }
            });
        } catch (e) {
            console.error('Error adding document: ', e);
        }
        return tshirt;
    }

    public async getTshirts(ids): Promise<Tshirt[]> {
        const idProducts: number[] = toNumberIds(ids);
        const tshirts: Tshirt[] = [];
        const qBasketball = query(collection(this._db,'basketball-shirts'));
        const querySnapshotBasketball = await getDocs(qBasketball);
        try {
            querySnapshotBasketball.forEach((d) => {
                const document = d.data() as Tshirt;
                if (idProducts.includes(document.idProduct)) {
                    tshirts.push(document);
                }
            });
        } catch (e) {
            console.error('Error adding document: ', e);
        }
        const qFootball = query(collection(this._db,'football-tshirts'));
        const querySnapshotFootball = await getDocs(qFootball);
        try {
            querySnapshotFootball.forEach((d) => {
                const document = d.data() as Tshirt;
                if (idProducts.includes(document.idProduct)) {
                    tshirts.push(document);
                }
            });
        } catch (e) {
            console.error('Error adding document: ', e);
        }
        return tshirts;
    }

}

const firestoreDB = new FirestoreDB();
Object.freeze(firestoreDB);
export default firestoreDB;

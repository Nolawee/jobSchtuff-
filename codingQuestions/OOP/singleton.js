// // class Settings {
// //     constructor() {
// //         if (Settings.instance instanceof Settings) {
// //             return Settings.instance;
// //         }

// //         this.settingsObject = {
// //             'background': '#ff0000',
// //             'version': Math.floor(Math.random() * 4000)
// //         };

// //         Object.freeze(this.settingsObject);
// //         // people can't modify the instance we create
// //         Object.freeze(this);
// //         Settings.instance = this;
// //     }

// //     get(key) {
// //         return this.settingsObject[key];
// //     }
// // }

// // const s = new Settings();
// // const a = new Settings()

// // console.log(s === a)


// // class Singleton {
// //     constructor() {

// //         if(Singleton.instance instanceof Singleton) {
// //             return Singleton.instance;
// //         }
        
// //         this.singletonObject = {
// //             name: "singleton instance",
// //             version: Math.floor(Math.random()* 4000)
// //         }

// //         Object.freeze(this.singletonObject);
// //         Object.freeze(this);

// //     }

// //     get(key) {
// //         return this.singletonObject[key];
// //     }
// // }


// class Singleton {

//     constructor() {
//         if(Singleton.instance instanceof Singleton) return Singleton.instance;

//         this.singletonObject = {
//             name: 'singletonExample',
//             version: Math.floor(Math.random*5000)
//         }

//         Object.freeze(this.singletonObject);
//         Object.freeze(this);
//         Singleton.instance = this;
//     }

//     get(key){
//         return this.singletonObject[key]
//     }
// }

class Singleton { 

    constructor() {
        if(Singleton.instance instanceof Singleton) return Singleton.instance


        this.singletonObject = {
            name: 'singleton1',
            version: Math.floor(Math.random() * 4000)
        };

        Object.freeze(this.singletonObject);
        Object.freeze(this);
        Singleton.instance = this;

    }

    get(key) {
        return this.singletonObject[key];
    }
    
}



class DBConnection {
    constructor() {
        if(DBConnection.instance instanceof DBConnection) return DBConnection.instance;

        this.connectionSettings = {
            url: 'www.google.com',
            password: Math.floor(Math.random() * 4000)
        }


        Object.freeze(this.connectionSettings);
        Object.freeze(this);

        DBConnection.instance = this;
    }

    getSetting(key) {
        return this.connectionSettings[key];
    }
}


const dbConn = new DBConnection();
const dbConn2 = new DBConnection();

console.log(dbConn.getSetting('password'));
console.log(dbConn2.getSetting('password'));

console.log(dbConn === dbConn2);

const a = new Singleton();
const b = new Singleton();

console.log(a === b);

console.log('a version ' + a.get('version'))
console.log('b version ' + b.get('version'))
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

const a = new Singleton();
const b = new Singleton();

console.log(a === b);

console.log('a version ' + a.get('version'))
console.log('b version ' + b.get('version'))
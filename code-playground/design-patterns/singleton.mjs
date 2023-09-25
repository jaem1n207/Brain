class Singleton {
  static instance = new Singleton();

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true

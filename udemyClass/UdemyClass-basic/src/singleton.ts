export class Singleton {
  private id: string;
  private name: string;
  private static instance: Singleton;
  private constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  static getInstance(id: string, name: string) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(id, name);
    }
    return Singleton.instance;
  }

  describe() {
    console.log(this.id + this.name);
  }
}

const singleton = Singleton.getInstance("666", "這是新溝頓");
singleton.describe();

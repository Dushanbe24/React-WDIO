export class Biome {
  private data: any;

  constructor() {
    this.data = {};
  }

  setData(key: string, value: any): void {
    this.data[key] = value;
  }

  getData(key: string): any {
    return this.data[key];
  }
}

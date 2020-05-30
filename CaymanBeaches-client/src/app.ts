export class App {
  name: string;
  location: string;
  activities: string;
  beaches: any[] = [];

  addBeach() {
    const beach = {
      name: this.name,
      location: this.location,
      activities: this.activities
    };
    this.beaches.push(beach);
    console.log(beach);
  }
}

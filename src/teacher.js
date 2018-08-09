import { Person } from "./person";

// export class Teacher extends Person {
export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teaching...");
  }
}

export function teach() {
  console.log("teach function");
}

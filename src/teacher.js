import Person from "./pesron"

class Teacher extends Person {
  constructor(name, age, gendor, interests, subject) {
    super(name, age, gendor, interests)
    this.subject = subject
  }
}
export default Teacher

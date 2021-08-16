/**
 * Data Structures
 *
 * Data structures are collections of values, the relationships among them, and the functions or
 * operations that can be applied to the data.
 */

/**
 * ES2015 Class Syntax
 */

// Example:
class Student {
  // constructor
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.scores = [];
  }

  // instance methods
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'You are expelled.';
    }
    return `${this.firstName} ${this.lastName} has been late ${
      this.tardies
    } time(s).`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }

  // static (class) methods
  static enrollStudents(...students) {
    // maybe send an email here
    return 'Enrolling students...';
  }
}

var student = new Student('Blue', 'Steele');
Student.enrollStudents([student]);

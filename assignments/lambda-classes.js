// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
        this.gender = attributes.gender
    }
};

class Instructor extends Person {
    constructor(name, location,age,gender, favLanguage,speciality, catchPhrase) {
        super(name, location,age, gender);
        this.speciality = speciality;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`
    }

    grade(studentObj, subject) {
        return `${studentObj.name} receives a perfect score on ${subject}`
    }
};

class Student extends Instructor {
    constructor(attributes) {
        super(attributes)
        this.previousBackground = attributes.previousBackground
        this.className = attributes.className
        this.favSubjects = attributes.favSubjects
     }

    
    listsSubjects() {
        return this.favSubjects
    }
    PRAssignments(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}`
    }
};

class ProjectManager extends Instructor {
    constructor(name, age, location,gender, speciality, favLanguage, catchPhrase, gradeClassName, favInstructor) {
        super(name, age,location, gender, speciality, favLanguage, catchPhrase);
        this.gradeClassName = gradeClassName;
        this.favInstructor = favInstructor;

    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }

    debugsCode(studentName, subject) {
        return `${this.name} debugs ${studentName}'s code on ${subject}.`
    }
};

const ashley= new Student({
    name: 'Ashley',
    location: 'Winston',
    age: 25,
    gender: 'female',
    previousBackground: 'Customer Service',
    className: 'WebPT6',
    favSubjects: ['Math', 'JavaScript', 'HTML', 'CSS']
  });

  const kevin = new ProjectManager({
    name: 'Kevin',
    location: 'Raleigh',
    age: 39,
    gender: 'female',
    gradClassName: 'CS11',
    favInstructor: 'Josh Knell',

  });

  const john = new Instructor({
    name: 'John',
    location: 'Durham',
    age: 43,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Imparting Wisdom',
    catchPhrase: `When it comes to code, Hulk Smash!!!`
  });


  console.log(john.demo('JavaScript'));
  console.log(john.grade(ashley,'JavaScript'));
  console.log(ashley.listsSubjects());
  console.log(ashley.PRAssignments('JavaScript IV'));
  console.log(ashley.sprintChallenge('JavaScript Fundamentals'));
  console.log(kevin.standUp('webpt6_kevin'));
  console.log(kevin.debugsCode(ashley.name,'JavaScript'));
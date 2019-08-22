// CODE here for your Lambda Classes
class Person{
    constructor(personAtt){
        this.name = personAtt.name;
        this.age = personAtt.age;
        this.location = personAtt.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(instructorAtt){
        super(instructorAtt);
        this.specialty = instructorAtt.specialty;
        this.favLanguage = instructorAtt.favLanguage;
        this.catchPhrase = instructorAtt.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(studentAtt, subject){
        return `${studentAtt.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(studentAtt){
        super(studentAtt);
        this.previousBackground = studentAtt.previousBackground;
        this.className = studentAtt.className;
        this.favSubjects = studentAtt.favSubjects;
    }
    listSubjects(studentAtt){
            for (let x of this.favSubjects){
                console.log(` One of ${studentAtt.name}'s favorite subjects is ${x}`);
            }
    }
    PRAssignment(studentAtt, subject){
        return `${studentAtt.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(studentAtt, subject){
        return `${studentAtt.name} has begun sprint challenge on ${subject}`;
    }
}



class ProjectManager extends Instructor{
    constructor(pmAtt){
        super(pmAtt);
        this.gradeClassName = pmAtt.gradeClassName;
        this.favInstructor = pmAtt.favInstructor;
    }
    standup(pmAtt, channel){
        return `${pmAtt.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(pmAtt,studentAtt){
        return `${pmAtt.name} debugs ${studentAtt.name}'s code on ${studentAtt.className}`;
    }
}



const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});


const jamie = new Instructor({
    name: 'Jamie',
    location: 'Kings Landing',
    age: 37,
    favLanguage: 'CSS',
    specialty: 'King Slaying',
    catchPhrase: `Don't forget the homies`
});



const nicholas = new Instructor({
    name: 'Nicholas',
    location: 'The Wall',
    age: 22,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `I dun wan' it`
});



const kevin = new Student({
    name: 'Kevin',
    location: 'Boston',
    age: 29,
    previousBackground: 'Nerd',
    className: 'CS2',
    favSubjects: [
    'Python',
    'CSS',
    'HTML',
    'JavaScript']
});


const kaladin = new Student({
    name: 'Kaladin',
    location: 'Uritheru',
    age: 25,
    previousBackground: 'Doctors Apprentice',
    className: 'Windrunner',
    favSubjects: [
    'Python',
    'CSS',
    'HTML',
    'JavaScript']
});


const lindsey = new Student({
    name: 'Lindsey',
    location: 'The Bay',
    age: 66,
    previousBackground: 'runner',
    className: 'WebFT',
    favSubjects: [
    'Python',
    'CSS',
    'HTML',
    'JavaScript']
});


const erica = new ProjectManager({
    name: 'Erica',
    location: 'Seattle',
    age: 28,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Commit -m 'my god this better work'`,
    gradeClassName: 'Python masters',
    favInstructor: 'Britt'
});


const john = new ProjectManager({
    name: 'John',
    location: 'Maine',
    age: 50,
    favLanguage: 'Node',
    specialty: 'Back-end',
    catchPhrase: `That's what I do, I drink and I know things`,
    gradeClassName: 'UI/UX',
    favInstructor: 'Mike'
});


const james = new ProjectManager({
    name: 'James',
    location: 'Texas',
    age: 31,
    favLanguage: 'JavaScript',
    specialty: 'Project Management',
    catchPhrase: `Don't forget the hydro-homies`,
    gradeClassName: 'Dunny',
    favInstructor: 'Ryan'
});

console.log(kevin.listSubjects(kevin))
console.log(fred.demo('methods'));
console.log(erica.standup(erica,'general' ))
console.log(james.debugsCode(james,kevin,))
console.log(lindsey.PRAssignment(lindsey, 'Python'))
console.log(kaladin.sprintChallenge(kaladin, 'Java'))
console.log(jamie.demo('Underground dance fights'))
console.log(nicholas.grade(nicholas, `Underground Dance Fighting`))

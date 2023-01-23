class PoliceRobot {
    constructor(state, city) {
        this.state = state;
        this.city = city;
    }
    fireTearGas () {
        console.log('Throwing tear gase...');
    }
}


class NavyRobot{
    constructor(location) {
        this.location = location;
    }

    swiming () {
        console.log('Swiming...');
    }

    waterCombat () {
        console.log('Doing Water Combat.....');
    }
}

class ArmyRobot {
    constructor(location) {
        this.location = location;
    }

    handToHandCombat () {
        console.log('Doing Hand to hand combat...');
    }

    handleMachingGuns () {
        console.log('Handling Maching guns...');
    }
}

class AirForceRobot {
    constructor(airbase) {
        this.airbase = airbase;
    }

    fly () {
        console.log('Flying......');
    }

    airToAirCombat () {
        console.log('Doing air to air combat...')
    }
}

class Robot {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    myInfo () {
        console.log('Name:', this.name);
        console.log('Location:', this.location);
    }

    walk() {
        console.log('Walking....');
    }

    run() {
        console.log('Running....');
    }

    learnNavy () {
        this.navySkills = new NavyRobot('Vizak');
    }

    learnAir () {
        this.airSkills = new AirForceRobot('Ambala');
    }

    unlearnNavy () {
        delete this.navySkills;
    }

    unlearnAirSkills () {
        delete this.airSkills;
    }
}

// class NavyAirRobot extends NavyRobot, AirForceRobot {
//     constructor(name, location) {
//         super(name);
//         this.location = location;
//     }
//
//     myInfo() {
//         super.myInfo();
//         console.log('Location: ', this.location);
//     }
// }

// const policeRobot = new PoliceRobot('Test1', 'Gujarat', 'Ahmedabad');
// policeRobot.myInfo();
// policeRobot.fireTearGas();

// const armyRobot = new ArmyRobot('Black Commando', 'Kashmir');
// armyRobot.myInfo();
// armyRobot.handleMachingGuns();
// armyRobot.handToHandCombat();

// const airRobot = new AirForceRobot('Rafel Commando', 'Ambala');
// airRobot.myInfo();
// airRobot.fly();
// airRobot.airToAirCombat();

const robot = new Robot('T', 'India');
robot.myInfo();
console.log(robot.airSkills);
robot.learnAir();
console.log(robot.airSkills);
robot.airSkills.airToAirCombat();

// robot.unlearnAirSkills();
// console.log(robot.airSkills);


// Composition --- Code Reusability
// Observer Design Patter
// Polimorphisem -- Run time


/*
* -> Start with Inheritance explaining our scenarios and with implementation...
* -> Then while implementation, reach to the problem...
* -> Explain the problem and start with solution
* -> Explain the solution
* -> and at last, pros and cons of Inheritance and Composition... and Black and White Theory...
* */

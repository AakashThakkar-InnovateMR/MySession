class Robot {
    constructor(name) {
        this.name = name;
    }

    myInfo () {
        console.log('Name:', this.name);
    }

    walk() {
        console.log('Walking....');
    }

    run() {
        console.log('Running....');
    }
}

class PoliceRobot extends Robot{
    constructor(name, state, city) {
        super(name);
        this.state = state;
        this.city = city;
    }

    myInfo() {
        super.myInfo();
        console.log('State: '+ this.state);
        console.log('City: '+ this.city);
    }

    fireTearGas () {
        console.log('Throwing tear gase...');
    }
}

class NavyRobot extends Robot {
    constructor(location) {
        super();
    }

    swiming () {
        console.log('Swiming...');
    }
}

class ArmyRobot extends Robot {
    constructor(name, location) {
        super(name);
        this.location = location;
    }

    myInfo() {
        super.myInfo();
        console.log('Location: ', this.location);
    }

    handToHandCombat () {
        console.log('Doing Hand to hand combat...');
    }

    handleMachingGuns () {
        console.log('Handling Maching guns...');
    }
}

class AirForceRobot extends Robot {
    constructor(name, airbase) {
        super(name);
        this.airbase = airbase;
    }

    myInfo() {
        super.myInfo();
        console.log('Airbase: ' + this.airbase);
    }

    fly () {
        console.log('Flying......');
    }

    airToAirCombat () {
        console.log('Doing air to air combat...')
    }
}

class NavyAirRobot extends NavyRobot, AirForceRobot {
    constructor(name, location) {
        super(name);
        this.location = location;
    }

    myInfo() {
        super.myInfo();
        console.log('Location: ', this.location);
    }
}

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

const airNavy = new NavyAirRobot('Rafel', 'Vizak');
airNavy.myInfo();
airNavy.airToAirCombat();
airNavy.swiming();

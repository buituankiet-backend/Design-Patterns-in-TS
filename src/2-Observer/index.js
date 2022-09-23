class Observer {
    constructor(name) {
        this.name = name;
    }

    updateStatus(location) {
        this.notify(location)
    }

    notify(location) {
        console.log(`${this.name} :::::::> ${JSON.stringify(location)} `);
    }
}

class Subject{
    constructor(){
        this.observer = [];
    }

    addObserver(menber) {
        this.observer.push(menber);
    }

    notify(location) {
        this.observer.forEach( observer => observer.updateStatus(location));
    }
}

const sub = new Subject();

//
const menber1 = new Observer('menber1');
const menber2 = new Observer('menber2');
const menber3 = new Observer('menber3');

sub.addObserver(menber1);
sub.addObserver(menber2);
sub.addObserver(menber3);

//push Notify
sub.notify('Hello Guys');
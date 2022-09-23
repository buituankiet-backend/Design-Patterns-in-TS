class Observer {
    name: string;
    constructor(name: string) {
        this.name = name
    }

    updateNotify(value: string) {
        this.notify(value);
    }

    notify(menber: string){
        console.log(`${this.name} ====> ${menber}`);
        
    }
}

class Subject {
    observer: any[]
    constructor() {
        this.observer = []
    }

    addSubject(menber: Observer){
        this.observer.push(menber);
    }

    notify(location: string) {
        this.observer.forEach( observer => observer.updateNotify(location))
    }
}

const sub = new Subject();

const menber1 = new Observer('menber1');
const menber2 = new Observer('menber2');

sub.addSubject(menber1);
sub.addSubject(menber2);

sub.notify('Hello Guys');
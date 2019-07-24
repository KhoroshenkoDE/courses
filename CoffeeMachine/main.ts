class Water {
    private readonly MAX_CAPASITY: number = 2000;
    private amount = 0;

    constructor() { }

    public setWater(water: number): void {
        if(water <= this.MAX_CAPASITY && water > 0) {
            this.amount = water;
        } else {
            console.log(`Hе возможно добавить ${water}`)
        }
    }

    public getWater(value: number): number {
        if(this.amount >= value) {
            this.amount = this.amount - value;
            return value;
        } else {
            console.log('Недостаточно воды');
            return 0;
        }
    }
}

class Milk {
    private readonly MAX_CAPASITY: number = 800;
    private amount = 0;

    constructor() { }

    public setMilk(milk: number): void {
        if(milk <= this.MAX_CAPASITY && milk > 0) {
            this.amount = milk;
        } else {
            console.log(`Hе возможно добавить ${milk}`)
        }
    }

    public getMilk(value: number): number {
        if(this.amount >= value) {
            this.amount = this.amount - value;
            return value;
        } else {
            console.log('Недостаточно Молока');
            return 0;
        }
    }
}

class Coffee {
    private readonly MAX_CAPASITY: number = 500;
    private amount = 0;

    constructor() { }

    public setCoffee(coffee: number): void {
        if(coffee <= this.MAX_CAPASITY && coffee > 0) {
            this.amount = coffee;
        } else {
            console.log(`Hе возможно добавить ${coffee}`)
        }
    }

    public getCoffee(value: number): number {
        if(this.amount >= value) {
            this.amount = this.amount - value;
            return value;
        } else {
            console.log('Недостаточно Кофе');
            return 0;
        }
    }
}

class CoffeeMachine {

    private water;
    private milk;
    private coffee;

    constructor(water: Water, milk: Milk, coffee: Coffee)  {
        this.water = water;
        this.milk = milk;
        this.coffee = coffee;
    }

    public createEspresso(): string {
        
        const coffee = this.coffee.getCoffee(20);
        const water = this.water.getWater(200);
        if(water == 200 && coffee == 20){
            console.log('coffee ready', `used ${water} ml water`, `used ${coffee} ml coffee`);
            return 'coffee';
        } else {

        } 
        
    }

    public createLatte(): string {
         
        const coffee = this.coffee.getCoffee(20);
        const water = this.water.getWater(200);
        const milk = this.milk.getMilk(100);
        if(water == 200 && milk == 100 && coffee == 20){
            console.log('coffee ready', `used ${water} ml water`, `used ${milk} ml milk`,  `used ${coffee} gr coffee`);
            return 'coffee';
        } else {

        } 
        
    }

}

const coffee = new Coffee();
coffee.setCoffee(500);


const water = new Water();
water.setWater(2000);

const milk = new Milk();
milk.setMilk(800);

const machine: CoffeeMachine = new CoffeeMachine(water, milk, coffee);
let cap: string = machine.createLatte();
let cap1: string = machine.createEspresso();

console.log(cap);
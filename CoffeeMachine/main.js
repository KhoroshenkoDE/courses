var Water = /** @class */ (function () {
    function Water() {
        this.MAX_CAPASITY = 2000;
        this.amount = 0;
    }
    Water.prototype.setWater = function (water) {
        if (water <= this.MAX_CAPASITY && water > 0) {
            this.amount = water;
        }
        else {
            console.log("H\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C " + water);
        }
    };
    Water.prototype.getWater = function (value) {
        if (this.amount >= value) {
            this.amount = this.amount - value;
            return value;
        }
        else {
            console.log('Недостаточно воды');
            return 0;
        }
    };
    return Water;
}());
var Milk = /** @class */ (function () {
    function Milk() {
        this.MAX_CAPASITY = 800;
        this.amount = 0;
    }
    Milk.prototype.setMilk = function (milk) {
        if (milk <= this.MAX_CAPASITY && milk > 0) {
            this.amount = milk;
        }
        else {
            console.log("H\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C " + milk);
        }
    };
    Milk.prototype.getMilk = function (value) {
        if (this.amount >= value) {
            this.amount = this.amount - value;
            return value;
        }
        else {
            console.log('Недостаточно Молока');
            return 0;
        }
    };
    return Milk;
}());
var Coffee = /** @class */ (function () {
    function Coffee() {
        this.MAX_CAPASITY = 500;
        this.amount = 0;
    }
    Coffee.prototype.setCoffee = function (coffee) {
        if (coffee <= this.MAX_CAPASITY && coffee > 0) {
            this.amount = coffee;
        }
        else {
            console.log("H\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C " + coffee);
        }
    };
    Coffee.prototype.getCoffee = function (value) {
        if (this.amount >= value) {
            this.amount = this.amount - value;
            return value;
        }
        else {
            console.log('Недостаточно Кофе');
            return 0;
        }
    };
    return Coffee;
}());
var CoffeeMachine = /** @class */ (function () {
    function CoffeeMachine(water, milk, coffee) {
        this.water = water;
        this.milk = milk;
        this.coffee = coffee;
    }
    CoffeeMachine.prototype.createEspresso = function () {
        var coffee = this.coffee.getCoffee(20);
        var water = this.water.getWater(200);
        if (water == 200 && coffee == 20) {
            console.log('coffee ready', "used " + water + " ml water", "used " + coffee + " ml coffee");
            return 'coffee';
        }
        else {
        }
    };
    CoffeeMachine.prototype.createLatte = function () {
        var coffee = this.coffee.getCoffee(20);
        var water = this.water.getWater(200);
        var milk = this.milk.getMilk(100);
        if (water == 200 && milk == 100 && coffee == 20) {
            console.log('coffee ready', "used " + water + " ml water", "used " + milk + " ml milk", "used " + coffee + " gr coffee");
            return 'coffee';
        }
        else {
        }
    };
    return CoffeeMachine;
}());
var coffee = new Coffee();
coffee.setCoffee(500);
var water = new Water();
water.setWater(2000);
var milk = new Milk();
milk.setMilk(800);
var machine = new CoffeeMachine(water, milk, coffee);
var cap = machine.createLatte();
var cap1 = machine.createEspresso();
console.log(cap);

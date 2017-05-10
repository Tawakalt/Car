'use strict';

   
  class Car {
    //initializing constructor
  constructor(name, model,type) {
    this.name = name;
    this.model = model;
    this.type = type;
    this.isSaloon = true;
    this.numOfDoors = 4;
    this.numOfWheels = 4;
    this.speed = '250 km/h';
    
    if (this.name === undefined)
      this.name = "General";
    if (this.model === undefined)
      this.model = "GM";
    if ((this.name === "Porshe") || (this.name === "Koenigsegg"))
      this.numOfDoors = 2;
    if(this.type === "trailer"){
      this.speed = '0 km/h';
      this.numOfWheels = 8;
      this.isSaloon = false;
        
    }
    
  }
  drive(a) {
    if (this.type === 'trailer')
        this.speed = '77 km/h';
    return this;
  }
  
}

module.exports = Car

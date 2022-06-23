 function Sandwich (bread, meat, vegetables){
     this.bread = bread;
     this.meat = meat;
     this.vegetables = vegetables;
     
     console.log(`Do you have a ${this.meat} sandwich with ${this.bread} on top and with ${this.vegetables}?.`);
 }
 
 let order = new Sandwich('Cornbread', ['grilled chicken breast', 'Swiss cheese'], ['tomatoes', 'lettuce']);
 
 console.log(order);

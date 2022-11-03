const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    for (const potion of this.potions) {
      console.log(potion);
    };
  },
  addPotion(newPotion) {

    const newPotionName = newPotion.name;
    // console.log(newPotionName);
  
    const array = [];
    for (const potion of this.potions) {
      array.push(potion.name);
    }
      // console.log(array);
    

    if (array.includes(newPotionName)) {
      return console.log(`Error! Potion '${newPotionName}' is already in your inventory!`);;
    } else {
      this.potions.push(newPotion);
    console.log(this.potions);

    }
    // console.log();
    // this.potions.push(newPotion);
  },
//   removePotion(potionName) {
//     const array = [];

//     for (const potion of this.potions) {
//       array.push(potion.name);
//     }
//       console.log(array);

//     const potionIndex = array.indexOf(potionName);
// console.log(potionIndex);
//     // if (potionIndex === -1) {
//     //   return `Potion ${potionName} is not in inventory!`;
//     // }

//     this.potions.splice(potionIndex, 1);
//     console.log(this.potions);
//   },
  updatePotionName(oldName, newName) {
    const array = [];

    for (const potion of this.potions) {
      array.push(potion.name);
    }

    const potionIndex = array.indexOf(oldName);
    console.log(potionIndex);
    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions[potionIndex].name = newName;
    console.log(this.potions);
  },
  // Change code above this line
};


// atTheOldToad.getPotions();

// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Speerd potion", price: 764 });

// atTheOldToad.removePotion({ name: "Speed potion", price: 460 });

atTheOldToad.updatePotionName( "Speed potion", "77777777777");




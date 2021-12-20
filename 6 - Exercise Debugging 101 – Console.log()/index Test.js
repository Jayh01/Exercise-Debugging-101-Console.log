const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "chicken hypnotist", age: 59 },
    { name: "A. Curry", profession: "frogman", age: 32 },
    { name: "F. Vonk", profession: "snake milker", age: 36 },
    { name: "B. Bunny", profession: "rabbit walking service", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];

// Voorbeeld loop log 1

  for (let person of array) {
    // this is where the console.logs go
    
    // console.log( "Volledig persoons gegevens", person);
    // console.log( "Naam is: ", person.name);
    // console.log( "Leeftijd: ", person.age);
    // console.log( person.name, "is een " + person.profession);

    if (person.age > 50) {
        console.log("Klanten boven 50+: "  +  person.name + " Leeftijd: " +  person.age);
    }
    else{
        console.log("Klanten onder 50: " +  person.name + " Leeftijd: " +  person.age  );
    }
  };

// Voorbeeld loop log 2
//   for (let i = 0; i < array.length;i++){
//     const uitslagArray = array[i]
//     console.log(uitslagArray.name);
//   };

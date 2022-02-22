const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

const edadAdecuada = team.map(person => person.age).every(player => player <=15)
  console.log("pueden jugar:",edadAdecuada);
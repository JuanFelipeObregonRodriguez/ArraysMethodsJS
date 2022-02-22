const persons = [
    {person: "juan"},
    {person:"maria"},
    {person:"carlos"}
]

function find ( val) {
    persons.find((item)=>{
        val === item.persons;
    })
    return true
};

find(persons, "juan");
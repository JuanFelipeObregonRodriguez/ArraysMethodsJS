const numbers = [1, 3, 5, 2, 7, 4, 7, 4, 5];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break;
    }

}
console.log(rta);

const rta2 = numbers.some(item => item % 2 === 0);
console.log(rta2);

const orders = [{
        customerName: "juan",
        total: 50,
        delivery: true,

    },
    {
        customerName: "santiago",
        total: 60,
        delivery: false,
    },
    {
        customerName: "carlos",
        total: 45,
        delivery: true,
    },
    {
        customerName: "maria",
        total: 48,
        delivery: false,
    },
    {
        customerName: "juan",
        total: 90,
        delivery: false,
    }

];

const trueDelivery = orders.some(item => item.delivery);

console.log(trueDelivery);

const dates = [{
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');


const isOverlap = (newDate) => {
    return dates.some(item => {
        return areIntervalsOverlapping(
            {
            start: item.startDate,
            end: item.endDate,
        }, {
            start: newDate.startDate,
            end: newDate.endDate,
        }
        )
    })
}
console.log(isOverlap);
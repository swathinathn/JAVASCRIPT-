function OddorEven(...number) {
    number.forEach(num => {
        if (num % 2 === 0) {
            console.log(num + " is Even");

        } else {
            console.log(num + " is odd");

        }

    });

}

OddorEven(1, 2, 3, 4, 5, 6, 7)
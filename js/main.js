// console.log('test');
// console.log($);


$(() => {

    // ===== VARIABLES ======
    const $add = $('#add'); // will use for add button
    const $subtract = $('#subtract');
    const input = $('#count').val();
    const inputValue = parseInt(input); // take the value of the input and make it an integer
    let newNumber = parseInt($('h1').text()); // to treat the 0 as an integer, not a string


    // ===== FUNCTIONS/ EVENT HANDLERS ======
    // $input.on('input', (event) => {
    //     console.log('works');
    //     event.preventDefault();
    // })
    
    var number = parseInt($('h1').text());

    $add.on('click', () => {
        console.log('working');
        // parseInt($('h1').val()) + inputValue // doesn't change the 0
        // parseInt($('h1').text(parseInt($('h1').val()) + inputValue)) // returns NaN
        var a = parseInt($('input').val());
        // return $('h1').text(parseInt($('h1').val() + a)); // only increments by the input value ONCE
        
        // var b = parseInt($('h1').text(parseInt($('h1').val())));
        // return b += a 

        return $('h1').text(number += a) // INCREMENTS BY GIVEN INPUT
    })

    $subtract.on('click', () => {
        console.log('this works too');
        var x = parseInt($('input').val());
        // return newNumber -= x;
        // return $('h1').text(parseInt($('h1').val() - x)); // only decrements by the input ONCE

        // if ($('h1').text(number -= x) % 2 !== 0) {
        //     return ($('h1').text(number -= x)).css('color', 'red')
        // } else {
        //     return $('h1').text(number -= x).css('color', 'black')
        // } // tried making negative numbers red

        return $('h1').text(number -= x)
    })
})
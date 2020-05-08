// console.log('test');
// console.log($);


$(() => {

    // ===== VARIABLES ======
    const $add = $('#add');
    const $subtract = $('#subtract');
    const $input = $('#count').val();
    const $inputValue = parseInt($input);
    let $newNumber = parseInt($('h1').text());


    // ===== FUNCTIONS/ EVENT HANDLERS ======
    // $input.on('input', (event) => {
    //     console.log('works');
    //     event.preventDefault();
    // })

    $add.on('click', () => {
        console.log('working');
        $newNumber += $inputValue
    })

    $subtract.on('click', () => {
        console.log('this works too');
        $newNumber -= $inputValue
    })

})
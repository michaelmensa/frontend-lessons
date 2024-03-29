import $ from 'jquery';
import _ from 'lodash';

const paragraphOne = $('<p>').text('Holberton Dashboard');
const paragraphTwo = $('<p>').text('Dashboard data for the students');
const button = $('<button>').text('Click here to get started');
const paragraphThree = $('<p>', {
    id: 'count'
});
const paragraphFour = $('<p>').text('Copyright - Holberton School');

$('body').append(paragraphOne, paragraphTwo, button, paragraphThree, paragraphFour);


// function updateCounter() that tracks the number of times the
// the button element has been clicked.
let count = 0;

function updateCounter() {
    count++;
    $('#count').text(count + ' clicks on the button');
}

button.on('click', _.debounce(updateCounter, 1000));
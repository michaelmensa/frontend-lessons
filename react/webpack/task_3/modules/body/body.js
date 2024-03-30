import $ from 'jquery';
import _ from 'lodash';
import css from './body.css';

/**
 * Import jQuery, Lodash and add the body code (button, counter) in the body.js file.
 * Add the needed style to the body.css file.
 */

const paragraphTwo = $('<p>').text('Dashboard data for the students');
const button = $('<button>').text('Click here to get started');
const paragraphThree = $('<p>', {
    class: 'count',
    id: 'count'
});

$('body').append(paragraphTwo, button, paragraphThree);


// function updateCounter() that tracks the number of times the
// the button element has been clicked.
let count = 0;

function updateCounter() {
    count++;
    $('#count').text(count + ' clicks on the button');
}

button.on('click', _.debounce(updateCounter, 1000));
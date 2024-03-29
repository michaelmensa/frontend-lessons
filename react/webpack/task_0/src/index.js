import $ from 'jquery';

const paragraph = $('<p>');
const paragraph2 = $('<p>');
const paragraph3 = $('<p>');

// add text to each paragraph
paragraph.text('Holberton Dashboard');
paragraph2.text('Dashboard data for the students');
paragraph3.text('Copyright - Holberton School');

$('body').append(paragraph, paragraph2, paragraph3);

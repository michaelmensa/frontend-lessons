import $ from 'jquery';
import css from './footer.css';

const footer = $('<p>', {
    class: 'footer'
}).text('Copyright - Holberton School');

$('body').append(footer);
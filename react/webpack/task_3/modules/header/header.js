import $ from 'jquery';
import image from './holberton-logo.jpg'
import css from './header.css';
/**
 * import jquery, add the logo and the h1 title to the header.js
 * header content: Holberton Dashboard
 * add console.log(Init header)
 */

// Header
const imgLogo = $('<img>', {
    class: 'logo',
    src: image
});
const header = $('<h1>').text('Holberton Dashboard');
$('body').append(imgLogo, header);
console.log('Init header');
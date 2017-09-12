import MobileMenu from './modules/mobilemenu';
import RevealOnScroll from './modules/revealOnScroll';
import $ from 'jquery';


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
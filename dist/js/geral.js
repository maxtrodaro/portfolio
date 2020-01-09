(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

// Carousel in the project block
var slickProjects = function slickProjects() {
    var carouselProjects = $('.e-projects__content__list');
    carouselProjects.slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true,
                dots: false
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false
            }
        }]
    });
};

// Carousel in the tecnology block
var slickTecnology = function slickTecnology() {
    var carouselTecnology = $('.e-tecnology__content__list');
    carouselTecnology.slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true,
                dots: false
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false
            }
        }]
    });
};

// Open menu on mobile
var openMenu = function openMenu() {
    $('.e-header__mobile').click(function () {
        $(this).parent().find('.e-header__right').toggleClass('is--active');
        $(this).toggleClass('is--active');
    });
};

// Scroll page on menu
var scrollPage = function scrollPage() {
    if ($(window).innerWidth() > 767) {
        $('.e-header__right__list__item:nth-child(1)').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 'slow');
        });
        $('.e-header__right__list__item:nth-child(2)').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 500
            }, 'slow');
        });
        $('.e-header__right__list__item:nth-child(3)').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 1000
            }, 'slow');
        });
        $('.e-header__right__list__item:nth-child(4)').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 1200
            }, 'slow');
        });
    } else {
        $('.e-header__right__list__item:nth-child(1)').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 'slow');
            $('.e-header__right').removeClass('is--active');
            $('.e-header__mobile').removeClass('is--active');
        });
        $('.e-header__right__list__item:nth-child(2)').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 800
            }, 'slow');
            $('.e-header__right').removeClass('is--active');
            $('.e-header__mobile').removeClass('is--active');
        });
        $('.e-header__right__list__item:nth-child(3)').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 1300
            }, 'slow');
            $('.e-header__right').removeClass('is--active');
            $('.e-header__mobile').removeClass('is--active');
        });
        $('.e-header__right__list__item:nth-child(4)').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 1500
            }, 'slow');
            $('.e-header__right').removeClass('is--active');
            $('.e-header__mobile').removeClass('is--active');
        });
    }
};

window.addEventListener('DOMContentLoaded', function () {
    slickProjects();
    slickTecnology();
    openMenu();
    scrollPage();
});

window.addEventListener('resize', function () {
    scrollPage();
});

},{}]},{},[1]);

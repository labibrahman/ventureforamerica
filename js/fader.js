$(document).ready(function() {
    var bgArray = ["1stlunch.jpg", "funSC2014.jpg", "Legochallenge02.jpg", "MaxNussenbaum.jpg", "sc2014biggroup.jpg", "sc2014redcarpet.jpg", "Traingcamp2013.jpg", "trainingcamp2013.jpg", "trainingcamp2013II.jpg", "YangOrates.jpg"];
    var bg = bgArray[Math.floor(Math.random() * bgArray.length)];
    var path = '../../../assets/images/';
    $('.vertical-hero').css('background-image', 'url(' + path+bg + ')');
}); 
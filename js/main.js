$(function(){

   

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button class="slick-btn  slick-prev"> <img src="images/arrow-left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn  slick-next"> <img src="images/arrow-right.png" alt="next"></button>',

      });

      $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        
      });



      function decryptMessage(message) {

        // write code here
    
    /**
 * @param {string} target
 *
 * @returns {boolean}
 */
function isWerewolf(target) {
  let direct = '';
  let reversed = '';
  
  for(let i=target.length-1; i>=0; i--){
    let isLetter =  target[i].toLowerCase() != target[i].toUpperCase();

    if(isLetter) {
      reversed += target[i];
    }
  }

  for (let ch of target) {
   let isLetter =  ch.toLowerCase() != ch.toUpperCase();
    if(isLetter) {
      direct += ch;
  }
  }

  if(direct.toLowerCase() == reversed.toLowerCase()) {
    return true;
  }

  return false;

  

}

    

















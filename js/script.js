$(function() {
    // LOADER
$(window).load(function() {
    setTimeout(function() {
      $('.loader').fadeOut('slow', function() {});
    }, 1500);
  });


// password toggle
var passwordToggle = document.querySelector('.js-password-toggle');
passwordToggle.addEventListener('change', function() {
  var password = document.querySelector('.js-password'),
    passwordLabel = document.querySelector('.js-password-txt');
  if (password.type === 'password') {
    password.type = 'text';
    passwordLabel.innerHTML = 'Hide';
  } else {
    password.type = 'password';
    passwordLabel.innerHTML = 'Show';
  }
  password.focus()
});
// change icon select gender
var selectGender = document.querySelector(".select-gender");
    selectGender.addEventListener("change", toggleIcon);
    function toggleIcon(){

    }

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };
});


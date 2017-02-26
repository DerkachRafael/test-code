$(function(){
// password toggle
var passwordToggle = document.querySelector('.jsPasswordToggle');
passwordToggle.addEventListener('change', function() {
  var password = document.querySelector('.jsPassword'),
  passwordLabel = document.querySelector('.jsPasswordTxt');
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
var selectGender = document.querySelector(".genderSelect");
selectGender.addEventListener("change", toggleIcon);
function toggleIcon(){
  var selected = selectGender.options[selectGender.selectedIndex].value,
  iconMale = document.querySelector("span .icon");
  if(selected == "female"){
	 iconMale.classList.remove("fa-male");
	 iconMale.classList.add("fa-female");
  }
  else if (selected == "male"){
	 iconMale.classList.remove("fa-female");
	 iconMale.classList.add("fa-male");
  }
};
// form validation
var bsValidator = $('.loginForm').bootstrapValidator({
  feedbackIcons: {
	 validating: 'glyphicon glyphicon-refresh'
  },
  excluded: [':disabled'],
  fields: {
	 name: {
		validators: {
		  stringLength: {
			 min: 2,
			 max: 45,
		  },
		  notEmpty: {
			 message: 'Please supply your first name'
		  }
		}
	 },
	 secondName: {
		validators: {
		 stringLength: {
		  min: 2,
		  max: 45,
		},
		notEmpty: {
		  message: 'Please supply your last name'
		}
	 }
  },
  email: {
	 validators: {
		notEmpty: {
		  message: 'Please supply your email address'
		},
		emailAddress: {
		  message: 'Please supply a valid email address'
		}
	 }
  },
  password: {
	 validators: {
	  stringLength: {
		min: 2,
		max: 15,
	 },
	 notEmpty: {
		message: 'Please supply your password'
	 }
  }
},
terms: {
  validators: {
	 notEmpty: {
		message: 'Please supply a description of your project'
	 }
  }
}
}
});
bsValidator.on('success.form.bv', function(e) {
 e.preventDefault();
				// $('.confirmBlock').slideDown({ opacity: "show" }, "slow");
				// $('.loginFrom').data('bootstrapValidator').resetForm();
				// Get the form instance
				var $form = $(e.target);
				// Get the BootstrapValidator instance
				var bv = $form.data('bootstrapValidator');
window.location.replace("company.html");
				// Use Ajax to submit form data
				// $.post($form.attr('action'), $form.serialize(), function(result) {
				//     console.log(result);
				// }, 'json');
				// $.ajax({
				//   type: "POST",
				//   url: "mail.php",
				//   success : function(){
				// 	 if (bsValidator === true){
				// 		alert("hello")
				// 	 } else {
				// 	  alert("false")
				// 	}
				//  }
			 //  });



			 });
});




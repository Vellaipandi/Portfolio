const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

function newuserdetails(){
    
    
	var users=localStorage.getItem("users")
    var pu=JSON.parse(users)
  

    let useridfn=document.getElementById("formname").value; 
    let useridln=document.getElementById("formemail").value; 
    let useridemail=document.getElementById("formsubject").value; 
    let password=document.getElementById("formmessage").value;

    let user={userid:useridfn,useridln,useridemail,password};
    pu.push(user);
    const x=JSON.stringify(pu);
    localStorage.setItem("users",x);
    console.log(localStorage.getItem("users"));
    alert("You have successfully submitted your information!.");
    

    
}    
/*(function(){


   * Intro type effect
   
 const typed = select('.typed')
 if (typed) {
   let typed_strings = typed.getAttribute('data-typed-items')
   typed_strings = typed_strings.split(',')
   new Typed('.typed', {
	 strings: typed_strings,
	 loop: true,
	 typeSpeed: 100,
	 backSpeed: 50,
	 backDelay: 2000
   });
 }
})()*/





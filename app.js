const menu=document.querySelector('#menu');
const pop= document.querySelector('.menu-pop');
const body=document.querySelector('body');
menu.addEventListener('click',function(){
   
   pop.classList.toggle('mostrar');
   if(pop.className!="menu-pop mostrar"){
      
   }else{
      body.addEventListener('click', function() {
      pop.className="menu-pop";
      pop.setAttribute("style","display:flex;");
      });
   }
});
  menu.addEventListener('click', function(event) {
    event.stopPropagation();
  });
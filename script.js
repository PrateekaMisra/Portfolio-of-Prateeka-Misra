//Mouse circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

const mouseCircleFn = (x, y) => {
  mouseCircle.style.cssText = `top:${y}px;left:${x}px; opacity:1`;
  mouseDot.style.cssText = `top:${y}px;left:${x}px; opacity:1`;
};

document.body.addEventListener("mousemove",(e)=>{
let x=e.clientX;
let y=e.clientY;
mouseCircleFn(x,y);
animateCircles(e,x,y);
});

document.body.addEventListener('mouseleave',()=>{
  mouseCircle.style.opacity='0';
  mouseDot.style.opacity='0';

});
//End of Mouse circle

// Animated Circle
const circles=document.querySelectorAll(".circle");
const mainCircle=document.querySelector(".main-circle img");

let mx=0, my=0;
const z=100;

const animateCircles=(e,x,y)=>{
  if(x<mx)
  {
    circles.forEach((circle)=>
    {
      circle.style.left=`${z}px`;
    });
    mainCircle.style.left=`${z}px`;
  }
  else if(x>mx)
  {
    circles.forEach((circle)=>
    {
      circle.style.left=`-${z}px`;
    });
    mainCircle.style.left=`-${z}px`;
  }
  if(y<my)
  {
    circles.forEach((circle)=>
    {
      circle.style.top=`${z}px`;
    });
    mainCircle.style.top=`${z}px`;
  }
  else if(y>my)
  {
    circles.forEach((circle)=>
    {
      circle.style.top=`-${z}px`;
    });
    mainCircle.style.top=`-${z}px`;
  }
  mx=e.clientX;
  my=e.clientY;
};

// End of Animated Circle


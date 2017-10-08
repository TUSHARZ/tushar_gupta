
var t1=0;
var here;
var startit = function(recieved){
	
	if (typeof recieved!='undefined' && recieved!=null){
		 here =recieved
		console.log("i am in")
	}
	var gohere= document.querySelector(String(here));
	console.log("here  ",here);
	console.log(gohere)
	var y1 = window.scrollY;
    y1 = y1+10;
    console.log(y1);
    window.scrollTo(0,y1);
    if(y1<=gohere.getBoundingClientRect().top+window.pageYOffset)
    {   console.log("section2 " , gohere.getBoundingClientRect().top);
        t1 = setTimeout("startit()",10);  
    }
    else
    {
        clearTimeout(t1);   
    }
}


function handle(){
	
	for(var i=2;i<=6 ; i++){
		console.log("#ref"+i);
		var g = document.querySelector("#ref" + i);
		g.addEventListener('click', startit.bind(window , '#section'+i));
	}

}

window.addEventListener('load',handle)

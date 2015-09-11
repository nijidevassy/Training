 var current=0;  
    var i=0, totalCost=0;    
    var images=["assest/jacket.jpg","assest/jacket1.jpg","assest/bag.jpg","assest/bag1.jpg","assest/footware.jpg","assest/footware1.jpg","assest/camera.jpg","assest/sunglasses.jpg","assest/laptop.jpg"];
        
        var itemNames=["Mens Jacket","Ladies Jacket","Travel Bag Backpack","Travel Bag","Mens Shoe","Ladies Shoe","Canon SLR"," FastTrack Sunglasses","Acer Laptop"];
        
        var itemPrices=[2500,1500,3000,2750,2000,1750,19000,1000,35000];
    
        var itemAvailability=[5,5,8,9,10,10,6,15,7];
       
        
        var itemObjects = [];
        var cart=[0,0,0,0,0,0,0,0,0];
         function productBase(name,price)
        {
            this.name=name;
            this.price=price;
        }
        
        function Prod(name,price,availability,image)
        {
            this.availability=availability;
            this.image= image;
            productBase.call(this, name, price);
        }
            Prod.prototype.addCart=function() 
        {
            var count=itemObjects[current].availability;
            if(count>0)
            {
            count=count-1;
            itemObjects[current].availability=count;
            totalCost=totalCost+itemObjects[current].price;
            cart[current]++;
            details(current);
            }
        }     
     
        Prod.prototype.cancel=function()
        {
            var countCancel=itemObjects[current].availability;
           
            if(cart[current] > 0)
            {
                countCancel=countCancel+1;
                
                itemObjects[current].availability=countCancel;
                cart[current]--;
                totalCost=totalCost-itemObjects[current].price;
                details(current);
            }
        }
         
        

        //Prod.prototype = Object.create(productBase.prototype);
        //Prod.prototype.contructor=Prod;
        
        
        for (i = 0; i < 9; i += 1) 
        {
        itemObjects[i] = new Prod(itemNames[i], itemPrices[i], itemAvailability[i], images[i]);
        }
        
        function details(i)
        {
         document.getElementById("h").innerHTML = "Product Details";
        
        document.getElementById("n").innerHTML = "NAME: "+itemObjects[i].name ;
        
        document.getElementById("p").innerHTML = "PRICE: "+itemObjects[i].price ;
    
        document.getElementById("a").innerHTML = "AVAILABILITY: "+itemObjects[i].availability ;
         current=i; 
        document.getElementById("t").innerHTML = "TOTAL COST: "+totalCost;
    
        }
        function init()
        {
            
            for(i=0;i<9;i++)
            {
             var division = document.createElement("div");
             var elem = document.createElement("img");
                
        elem.setAttribute("src", images[i]);
        elem.setAttribute("height", "150");
        elem.setAttribute("width", "150");
        elem.setAttribute("alt", "image");        
        elem.setAttribute("id",i);
        elem.setAttribute("style","float:left;padding:15px;");
                   
         division.appendChild(elem);
            document.getElementById("container").appendChild(division);    
      
                
        document.getElementById(i).addEventListener("click",function (icn) {
                return function() {
                    details(icn);
                }
        }(i));
               
            }
                                                  
            }
                                                  

 
$(document).ready(function() {
       $("#container").mouseenter(function(){
           $("img").mouseenter(function(t) {
               var ele = t.currentTarget.id;
               $("#"+ele).css("opacity",".5");
            
           });
           $("img").mouseout(function(e) {
               var ele = e.currentTarget.id;
               $("#"+ele).css("opacity","1");
           });
           
       });
   });


$(document).ready(function() {
    $("#add , #cancel").mouseenter(function(){
        $(this).css("background-color","#990000");
        
    });
    
    $("#add , #cancel").mouseout(function(){
        
        $(this).css("background-color","#FF3333");
    });
});
    
    

document.getElementById("add").addEventListener("click",itemObjects[current].addCart);
        document.getElementById("cancel").addEventListener("click",itemObjects[current].cancel);
        
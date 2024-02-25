function fun2(n1,n2)
{
  var res2;
 if(n1==='a' && n2==='a')
 {
    res2="20%";
 }
 else if(n1==='b' && n2==='a')
 {
    res2="30%";
 }
 else if(n1==='c' && n2==='a')
 {
    res2="40%";
 }
 else if(n1==='d' && n2==='a')
 {
    res2="40%";
 }
 else
 {
    res2="90%"
 }
 return res2;
}




function fun3()
{
    var ele = document.getElementsByName('gender1');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].value =="male")
        {
            document.getElementById("inp7").checked=true;
            document.getElementById("inp8").checked=false;
        }
       
            
    }  
    for (i = 0; i < ele.length; i++) {
       
        if (ele[i].value =="female")
        {
            document.getElementById("inp8").checked=true;
            document.getElementById("inp7").checked=false;
        }
            
    }  
}

function fun5(p1)
{
    if(p1=="80%" || p1=="90%" || p1=="100%")
    {
        document.getElementById("inp10").disabled=false;
    }
    else
    {
        document.getElementById("inp10").disabled=true; 
    }
}



function fun1()
{ 
    var a1=document.getElementById("inp1").value;
    var b1=document.getElementById("inp2").value;
    var c1=document.getElementById("inp5").value;
    var d1=document.getElementById("inp6").value;
    var e1=c1[c1.length-1].toLowerCase();
    
    if(a1!="" && b1!="" && c1!="" && d1!="")
    {
    document.getElementById("inp9").style.width="60%";
    document.getElementById("inp9").style.borderRadius="20px";
    document.getElementById("inp9").style.backgroundColor="white";
    document.getElementById("inp9").style.color="black";
    document.getElementById("inp9").style.paddingTop="20px";
    document.getElementById("inp9").style.paddingBottom="20px";
    document.getElementById("inp9").style.fontSize="30px";
    document.getElementById("inp9").style.fontFamily="Fira Sans, PT Sans, Calibri, Tahoma, sans-serif";
    /*document.getElementById("inp3").disabled=true;
    document.getElementById("inp4").disabled=true;*/
    
    fun3();        

    var ele2 = document.getElementsByName('gender2');
    for(i = 0; i < ele2.length; i++){
    if(ele2[i].value === "female")
    {    
    
    if(e1!='a' || e1!='i')
    {  
         
        if(confirm("please confirm friend is girl or not!") == true)
        {
            var res1=fun2(a1[a1.length-1],e1);
            document.getElementById("inp9").innerHTML="Your Result:"+res1;
            fun5(res1);
            
        }
        else{
            document.getElementById("inp9").innerHTML="Your Result: sorry can't calculate";
        }
    }
    else
    {
        var res1=fun2(a1[a1.length-1],e1);
        document.getElementById("inp9").innerHTML="Your Result:"+res1;
        fun5(res1);
    }
}

else
{
    var res1=fun2(a1[a1.length-1],e1); 
   document.getElementById("inp9").innerHTML="Your Result:"+res1;
   fun5(res1);
}
}  
}
    
else
{
    alert("Please fill all the details.");
}

}
function fun4()
{
 let x = Math.floor((Math.random() * 10) + 1);
 if(x==1)
 {
    window.open("https://youtu.be/qtz5mpvgAM0?si=1dtqBbPm-aMl4ya_");
 }
 else if(x==2)
 {
    window.open("https://youtu.be/zWPsjhBaRb0?si=bxTxnONcEZ2Q4-9i");
 }
 else if(x==3)
 {
    window.open("https://youtu.be/m6Y8xEfyXTs?si=zpbkterdugQmLzH_");
 }
 else if(x==4)
 {
    window.open("https://youtu.be/DAYszemgPxc?si=Dw60OMQ66tio60FA")
 }
 else if(x==5)
 {
    window.open("https://youtu.be/7KKVb0_IdD4?si=9btML7OVL2FoeZlx")
 }
 else if(x==6)
 {
    window.open("https://youtu.be/umgcSh7qblU?si=i-gCzQJbLwnkpEnP")
 }
 else if(x==7)
 {
    window.open("https://youtu.be/-Ecn2pbTcFU?si=OS6K9lUYMAb2mid3")
 }
 else if(x==8)
 {
    window.open("https://youtu.be/LFTV1zLv9B4?si=S_dzoQzrIPqdq1Cs")
 }
 else if(x==9)
 {
    window.open("https://youtu.be/Gcne5Wt-Qfo?si=EfWSaZybultg_Fnd")
 }
 else if(x==10)
 {
    window.open("https://youtu.be/gmXlGQAg400?si=zpQLWV-KBipXrFAn")
 }
 else 
 {
    window.open("https://youtu.be/bKZTnnFU9HA?si=JKe1SZUQeJEBwoSk")
 }

}
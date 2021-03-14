function feetToMile(feet){
    var mile=feet/5280;
    return mile;
}
var result=feetToMile(5280);
console.log(result,"Mile");

function woodCalculator(chair,table,cot){
    var vol =1*chair+3*table+5*cot;
    return vol;
}
var need=woodCalculator(2,3,1);
console.log(need,"feet^3");

function brickCalculator(floor){
    
    if(floor<=10){
        var brick=floor*15*1000;
    
    }


else if(floor<=20){
   var brick= (10*15+(floor-10)*12)*1000;
  
}
else {
    var brick= (10*15+10*12+(floor-20)*10)*1000;
    
}
return brick;
}

var requiredBrick=brickCalculator(33);
console.log(requiredBrick);




function tinyFriend(name){
    var min=name[0];
    for(var i=0; i< name.length;i++){
        var element=name[i];
        if (name[i].length<name[0].length){
            min=element;
        }
       
    }
    return min;
}
var input=['sohan','lubana','mim'];
var nam=tinyFriend(input);
console.log(nam);



      

//Probem 1:

function seerToMon(seer)
{
    if (isNaN(seer)) {
        return "Enter a Number Please"             //error case
    }
    else if (!Number.isFinite(seer)) {
        return "Enter a Finite number Please"      //error case
    }
    else if (seer < 0) {
        return "Mass must be greater than zero"    //error case
    }
    else{
        return(ser/40);
    }
    
}


//Problem 2:

function totalSales(shirt,pant,juta){
    if (isNaN(shirt) || isNaN(pant) || isNaN(juta)) {
        return "Price can't be non-numeric"                //error case
    }

    else if (!Number.isFinite(shirt * pant * juta)) {
        return "Enter Finite Integer"                     //error case
    }

    else if (!Number.isInteger(shirt) || !Number.isInteger(pant) || !Number.isInteger(juta) ||(shirt * pant * juta) < 0) {
        return "Price of items can not be negative"        //error case
    }
    else{
        return(shirt*100+pant*200+juta*500);
    }  

}


//Problem 3:

function deliveryCost(numberOfProduct)
{
    if (isNaN(numberOfProduct)) {
        return "Quantity can not be non numeric"           //error case
    }

    else if (!Number.isFinite(numberOfProduct)) {
        return "Please Enter a finite value"               //error case
    }

    else if ((!Number.isInteger(numberOfProduct)) || (numberOfProduct < 0)) {
        return "You must input a positive number or zero"   //error case
    }

    else{

        var total=0;
        if(numberOfProduct>200)
        {
            total+=(numberOfProduct-200)*50;
            numberOfProduct=200; 
        }
        
        
        if(numberOfProduct>100)
        {
            total+=(numberOfProduct-100)*80;
            numberOfProduct=100;
        }
        if(numberOfProduct<=100)
        {
            total+=numberOfProduct*100;
        }
        return total;
    }
    

}


//Problem 4:

function perfectFriend(name) {

    if (Array.isArray(name)) {

        if (name.length == 0) {
            return "You have entered an EMPTY ARRAY!";             //error case
        }

        else {

            for (let i = 0; i < name.length; i++) {

                if (typeof name[i] != 'string' || !isNaN(name[i])) {
                    return "You must enter VALID STRING VALUE for every name(s)!"        //error case
                }

                if (name[i].length == 5) {
                    return name[i];

                }

            }

        }

    }

    else {
        return "Enter an array of String"                 //error case
    }
    
}



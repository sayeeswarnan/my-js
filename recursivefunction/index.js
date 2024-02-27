//factorial recursion

function fact(input){
    if(input<0)
    {return null;
    }
     if(input===1)
    {return input;
    }

    return input * fact(input-1);


}
console.log(fact(5));
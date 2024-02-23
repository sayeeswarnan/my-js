//date objects =  objects that contains values that represent 
// date and time that can be formatted and changed


// date(year,month,day,hour,minute,second,ms)


const date = new Date();//initiallizing date object
console.log(date);

//how to get indivigualy date  date(year,month,day,hour,minute,second,ms)?
// we can get by following ways 
 
 const day = date.getFullYear();
 console.log(day);

 const year = date.setDate(2024);
 console.log(day);

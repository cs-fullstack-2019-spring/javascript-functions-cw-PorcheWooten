//Create a function that’s passed a firstName and lastName. Return lastName comma firstName.

function firstName(name1, name2)
{
    var fullName = name2 + "," + " " + name1;
   return fullName
}

var name1 = "Porche";
var name2 = "Wooten";
console.log(firstName(name1, name2));
//var aadharDetails = {
//    "name": "Karthiga",
//    "secondName":"Velu",
   // "gender":"Female",
 //   "dob":"1995"
//}
//for(var i = 0; i < aadharDetails.length; i++){
//}
//console.log(aadharDetails);
var data = [{
    "name" : "Karthiga V", 
    "course"   : "Learn mern stack development in Guvi",
    "mentor" : "Thirupathi",
    "Batch": "B52WD Tamil"
}

];
//for loop
for(var i = 0; i < data.length; i++) {
    var obj = data[i];

    console.log(obj.name);
    console.log(obj.course);
    console.log(obj.mentor);
    console.log(obj.Batch);

}

//for each
data.forEach(function(obj) { console.log(obj.course); });
data.forEach(function(obj) { console.log(obj.mentor);});

//for in loop
for(var a in data){console.log(a, data[a]);}

//for of

let text = "Hi";
for (let value of text) {

}
 console.log(text);
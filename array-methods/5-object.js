// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)
var obj = {
  place: "thehr",
  course: "javascript"
}
Object.keys(obj) = ["place", "course"]
Object.values(obj) = ["thehr", "javascript"]
Object.entries(obj) = [ ["place","thehr"], ["course","javascript"]


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
 var student = { 
  name: "David Rayy", 
  sclass: "VI", 
  rollno: 12
};
  // print object before deleting rollno
  console.log(student)
  // deleting rollno from object
  delete student.rollno
  // print object after deleting rollno
  console.log(student)



// 3. Write a function to get the length of an object.
function lengthofObject(obj){
  return Object.keys(obj);
}
lengthofObject(student)
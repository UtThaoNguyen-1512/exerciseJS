//ex1
function alphabet_text(text) {
  return text.split("").sort().join("");
}
console.log(alphabet_text("webmaster"));
//ex2
function uppercase(string) {
  var array = string.split(" ");
  var newarray = [];
  console.log(array);
  for (var i = 0; i < array.length; i++) {
    newarray.push(array[i][0].toUpperCase()) + array[i].slice(1);
  }
  return newarray.join("");
}
console.log(uppercase("nguyen thi ut thao"));
//ex3
var array01 = [1, 0, 2, 3, 4];
var array02 = [3, 5, 6, 7, 8, 13];
//ex5
var student = {
  name: "utthao",
  class: "intern",
  rollno: 12,
};
console.log(student);

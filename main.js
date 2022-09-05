
let names = ["jason", "jasmine", "jason", "jada", "jackson", "jasmine", "jasmine"];
let search = document.getElementById("search");
let result = document.getElementById("result");
function total (){
    let count = 0;
    for (let i = 0; i < names.length; i++){
        if (search.value == names[i]){
            count++;
        }
    }
    result.innerHTML = "Total is " + count;

}
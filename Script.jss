function searchData() {
    let value = document.getElementById("search").value;

    if (value === "") {
        document.getElementById("result").innerHTML =
            "Please enter your input";
    } else {
        document.getElementById("result").innerHTML =
            "Search completed: " + value;
    }
}
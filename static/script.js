window.addEventListener('DOMContentLoaded', () => {
    init()
    setInterval(tri, 500)
})

function extractNumbers() {
    let labelContainer = document.getElementById("label-container");
    let divs = labelContainer.getElementsByTagName("div");
    let numbers = [];

    for (let div of divs) {
        let match = div.innerText.match(/[-+]?[0-9]*\.?[0-9]+/g); // Extract numbers
        if (match) {
            numbers.push(parseFloat(match[0])); // Convert to float
        }
    }
    //console.log(numbers); // Output: [0.01, 0.01, 0.00, 0.00, 0.03, 0.94]
    return numbers;
}

function highlightColumn(thId) {
    // Get all <th> elements inside the <tr> with id "ligne"
    let thElements = document.querySelectorAll("#ligne th");

    // Loop through each <th> and remove the "green" class
    thElements.forEach(th => th.classList.remove("green"));

    // Add the "green" class to the specified <th>
    let targetTh = document.getElementById(thId);
    if (targetTh) {
        targetTh.classList.add("green");
    }
}


function tri(){
numbers = predica

    let biggest_number = 0
    let index = 0

    let conv_table = ["verre", "carton", "plastique", "metal", "organique", "papier"]

    let conv2_table = {"verre":"verre", "carton":"jaune", "plastique":"bleu", "metal":"bleu", "organique":"orange", "papier":"jaune"};

    for(let x in numbers){
        if(numbers[x] > biggest_number){
            biggest_number = numbers[x]
            index = x
        }
    }
    //console.log(biggest_number);
    //console.log(index);

    //console.log(conv_table[index]);
    //console.log(conv2_table["papier"]);

    //console.log(conv2_table[conv_table[index]]);

    let column = conv2_table[conv_table[index]];

    highlightColumn(column);
}


// Add Background By ID 

function addBgById(element){
    element.classList.add('bg-green-500','text-white');
}

//Append Element
function append(id,value){
    let div = document.createElement('div');
    div.classList.add('flex','justify-between','items-center','py-3','px-5','font-bold');

    let seatName = document.createElement('span');
    seatName.innerText = "Total Off";

    let seatPrice = document.createElement('span');
    seatPrice.innerText = 'BDT ' + value;

    div.appendChild(seatName);

    div.appendChild(seatPrice);

    id.appendChild(div);
}
// Add Background By ID 


function removeBgById(elementId){
    elementId.classList.remove('bg-green-500');
}
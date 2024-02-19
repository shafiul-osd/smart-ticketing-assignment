// All Seats 
const seats = Array.from(document.querySelectorAll('#seats button'));
const displayLeftTicket = document.querySelector('#seatLeft');
const purchaseDisplay = document.querySelector('#purchaseDisplay');
const totalPrice = document.getElementById('totalPrice');
const displayPurchedCount = document.getElementById('displayPurchedCount');
const grandTotal = document.getElementById('grandTotal');
const couponInput = document.getElementById('couponInput');
const couponApply = document.getElementById('couponApply');
const coupon1 = document.getElementById('coupon1').innerText;
const coupon2 = document.getElementById('coupon2').innerText;
const totalOff = document.getElementById('totalOff');
let next = document.getElementById('next');
let phone = document.getElementById('phone');

const coupleOff = parseInt(document.getElementById('coupleOff').innerText);
const new15Off = parseInt(document.getElementById('new15Off').innerText);

const couponSec = document.getElementById('couponSec');
const offSec = document.getElementById('offSec');

const xxx = document.getElementById('xxx')

// console.log(coupon1,coupon2);

const unitTicketPrice = document.querySelector('#unitPrice').innerText;
const purchedTickets = [];
const validPurched = [];

for(const seat of seats){

    let button = seat;
    let btnclass = button.className.split(' ').includes('bg-green-500');
    const totalTicketPrice = validPurched.length *unitTicketPrice;

    button.addEventListener('click',(e)=>{

    if(validPurched.length <= 3){
        
        purchedTickets.push(e.target.innerText)
        addBgById(e.target)
            
        let div = document.createElement('div');
        div.classList.add('flex','justify-between','items-center','py-3','px-5');
        let ticketName = document.createElement('span');
        ticketName.innerText = "";
        let ticketClass = document.createElement('span');
        ticketClass.innerText = "";
        let ticketPrice = document.createElement('span');
        ticketPrice.innerText = "";
        div.appendChild(ticketName);
        div.appendChild(ticketClass);
        div.appendChild(ticketPrice)

        // remove duplicates from purched Array

        for(const ticket of purchedTickets){
            if(!validPurched.includes(ticket)){
                validPurched.push(ticket);
                ticketName.innerText= ticket;
                ticketClass.innerText= 'Economy';
                ticketPrice.innerText= 550;
                purchaseDisplay.appendChild(div)
            }
        }
        const leftTickets = seats.length - validPurched.length;

        displayLeftTicket.innerText = leftTickets;  
        displayPurchedCount.innerText = validPurched.length;

    }

    totalPrice.innerText = unitTicketPrice * validPurched.length;
    let grandTtotalAmount = unitTicketPrice * validPurched.length;

    grandTotal.innerText = grandTtotalAmount;

 //--------------- Coupon Apply validation---------------

    if(validPurched.length === 4){
        couponApply.removeAttribute('disabled');
        couponInput.removeAttribute('disabled');

        couponInput.addEventListener('change',function(e){
            const inputValue = e.target.value.split().join("");

            couponApply.addEventListener('click', function(){
                if(inputValue === coupon1 || inputValue === coupon2){
                    if(inputValue === coupon1){
                        console.log(grandTtotalAmount/100*new15Off);
                        grandTotal.innerText = grandTtotalAmount - grandTtotalAmount/100*new15Off;
                        couponInput.value = '';
                        let val =  grandTtotalAmount/100*new15Off;
                        couponSec.classList.add('hidden');
                        couponSec.classList.add('hidden');
                        // offSec.classList.remove('flex');
                        append(xxx,val)
                        
                    }else if(inputValue === coupon2){
                        console.log('20');
                        grandTotal.innerText = grandTtotalAmount - grandTtotalAmount/100*coupleOff;
                        couponInput.value = '';
                        let val =  grandTtotalAmount/100*coupleOff;
                        couponSec.classList.add('hidden');
                        // offSec.classList.remove('flex');
                        // offSec.classList.remove('hidden');
                        append(xxx,val)
                    }
                }else{
                    alert('invalid')
                    // couponApply.setAttribute('disabled','true');
                    // couponInput.setAttribute('disabled','true');
                    couponSec.classList.add('hidden');
                    couponInput.value = '';
                }
            })
        })

    }else{
        couponApply.setAttribute('disabled','true');
        couponInput.setAttribute('disabled','true');
    }
 })


 if(validPurched.length <4){
    couponApply.setAttribute('disabled','true');
    couponInput.setAttribute('disabled','true');
}

}


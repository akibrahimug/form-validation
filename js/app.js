
//===========================================
//Focus state for the first input on the form
//===========================================
//Assign the name input field to the 'userName' variable 
const userName = document.querySelector('#name').focus();

//===========================================
//Hide the Other input field on Job Role
//===========================================

//Assign the other input field  to the 'other' variable name
const other = document.querySelector('#other-job-role');
other.style.display = 'none'

// Create a function 'otherJob'
const otherJob = () => {

    //Assign the job role select dropdown menue to the 'select' variable
    const select = document.querySelector('#title');

    // If 'value' is clicked unhide the 'other' input field if not keep hidden
    select.addEventListener('change', e => { 
        // check if the right option is being selected
       if(e.target.value === 'other'){
           //if true unhide
           other.style.display = 'block';
       }else{
           //if false keep hidden
           other.style.display = 'none'
       }
    })
}

//=====================================================================================
//Disable or enable the color select options depending on what design the user selects
//=====================================================================================

// Assign the color input field the variable 'color'
const color = document.querySelector('#color');

// Disable the color input field
color.setAttribute('disabled', 'disabled')

//Create a function 'colorSelect'
const colorSelect = () => {

    //Assign the design input field to the variable 'design'
    const design = document.querySelector('#design');

    design.addEventListener('change', e => {

        // if the user selects an option from the design input field 
        if(e.target.value === 'js puns' || e.target.value === 'heart js'){

            // Enable the color input field
            color.removeAttribute('disabled')
        }
        
         // Assign the all the color options to the variable 'options'
         const options = color.querySelectorAll('option');

        if(e.target.value === 'js puns'){

            // Iterate through all the color options 
            options.forEach(option => {

                // Disable all the options 
                option.setAttribute('hidden', 'hidden')

                //Select individual options based on their data attribute and assign them to the 'data' variable
                const data = option.getAttribute('data-theme');

                // if the data attribute is 'js puns' enable those options
                if(data === 'js puns'){
                    option.removeAttribute('hidden')
                }
            })
            
        }else if(e.target.value === 'heart js'){

             // Iterate through all the color options 
             options.forEach(option => {

                // Disable all the options 
                option.setAttribute('hidden', 'hidden')

                //Select individual options based on their data attribute and assign them to the 'data' variable
                const data = option.getAttribute('data-theme');

                // if the data attribute is 'heart js' enable those options
                if(data === 'heart js'){
                    option.removeAttribute('hidden')
                }
            })

        }
        
    })

}

//================================================================================================
// Calculate the total of the selected workshops, each selected cost is added to the total and if 
//unselected the remove from the total.
//=======================================

//Create a function 'totalCost'
const totalCost = () => {
    //Assign the total DOM element to the 'totalCost' variable
    const totalCost = document.querySelector('#activities-cost');

    // Create a count variable
    let count = 0

    //Assign all checkbox elements to the 'checkboxes' variable
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    //Iterate through all checkboxes and listen for changes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', e => {
            
            // if a checkbox is checked
            if(e.currentTarget.checked){
                //Assign the data-cost attribute to the 'itemCost' and ParseInt to turn a string into a number
                const itemCost = parseInt(checkbox.getAttribute('data-cost'));

                //Add the itemCost to the count
                count += itemCost;

                //Modify the total inner html to reflect the addition
                totalCost.innerHTML = `Total: $${count}`
                
                //if a checkbox is unchecked
            }else{

                //Assign the data-cost attribute to the 'itemCost' and ParseInt to turn a string into a number
                const itemCost = parseInt(checkbox.getAttribute('data-cost'));

                //Subtract the itemCost to the count
                count -= itemCost

                //Modify the total inner html to reflect the subtraction
                totalCost.innerHTML = `Total: $${count}`
                
            }
        })
    })
}

 //Assign the paypal option info to the variable 'paypal'
 const paypal = document.querySelector('#paypal');
 //make paypal info hidden
 paypal.style.display = 'none'

 // Assign the bitcoin option info to the variable 'bitcoin'
 const bitcoin = document.querySelector('#bitcoin');
 //make bitcoin info hidden
 bitcoin.style.display = 'none'

//=============================================
// Select credit card payment method by default
// ============================================

//Assign the paymet card input field to the variable 'paymentCard'
const paymentCard = document.querySelector('#payment');

// Assign the options in the paymentcard select element to the variable 'options'
const options = paymentCard.querySelectorAll('option');

// Iterate through the options
options.forEach(option => {

    // if any option value matches 'credit-card' add 'selected' attribute
    if(option.value === 'credit-card'){
        option.setAttribute('selected', 'selected');
       
    }
})

//=============================================================
// Create a function 'paymentInfo' to show or hide information
//depending on what paymentCard is choosen
//==============================================================

const paymentInfo = () => {

    // Listen for changes on the paymentCard select input field
    paymentCard.addEventListener('change', e => {

        //if value is paypal
        if(e.target.value === 'paypal'){

            // make paypal info visible
            paypal.style.display = 'block'

            // make bitcoin info hidden
            bitcoin.style.display = 'none'

            //if value is credit-card
        }else if(e.target.value === 'credit-card'){

            // make paypal info hidden
            paypal.style.display = 'none';

            // make bitcoin info hidden
            bitcoin.style.display = 'none'

            //if value is bitcoin
        }else if(e.target.value === 'bitcoin'){

            // make bitcoin info visible
            bitcoin.style.display = 'block';

            // make paypal info hidden
            paypal.style.display = 'none'
        }
    })

}

// ================
//Call functions
//=================
otherJob()
colorSelect()
totalCost()
paymentInfo()
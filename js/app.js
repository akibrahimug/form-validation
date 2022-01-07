
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
                option.setAttribute('disabled', 'disabled')

                //Select individual options based on their data attribute and assign them to the 'data' variable
                const data = option.getAttribute('data-theme');

                // if the data attribute is 'js puns' enable those options
                if(data === 'js puns'){
                    option.removeAttribute('disabled')
                }
            })
            
        }else if(e.target.value === 'heart js'){
            
             // Iterate through all the color options 
             options.forEach(option => {

                // Disable all the options 
                option.setAttribute('disabled', 'disabled')

                //Select individual options based on their data attribute and assign them to the 'data' variable
                const data = option.getAttribute('data-theme');

                // if the data attribute is 'heart js' enable those options
                if(data === 'heart js'){
                    option.removeAttribute('disabled')
                }
            })

        }
        
    })

}

// ================
//Call functions
//=================
otherJob()
colorSelect()
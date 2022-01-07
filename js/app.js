
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

// Create a function 'hideOther'
const hideOther = () => {

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
hideOther()
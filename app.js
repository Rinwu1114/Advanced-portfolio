// template_04h0zbs
// service_5zwqg3k
// WSMPI8n1cVi-6L52d

function contact(event){
    event.preventDefault();
    const loading = document.querySelector(`.modal__overlay--loading`)
    const success = document.querySelector(`.modal__overlay--success`)
    loading.classList += ` modal__overlay--visible`
     emailjs
     .sendForm(
        `service_5zwqg3k`,
        `template_04h0zbs`,
        event.target,
        `WSMPI8n1cVi-6L52d`
    ).then(() =>{
        loading.classList.remove(`modal__overlay--visible`)
        success.classList += ` modal__overlay--visible`
    }).catch(()=>{
        loading.classList.remove(`modal__overlay--visible`)
        alert(
            `The email service is temporarily unavailable. Please contact me directly at Rinwu1114@gmail.com`
        )
    })
}


let isModalOpen = false
function toggleModal(){
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove(`modal--open`)
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}


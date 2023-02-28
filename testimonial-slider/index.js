const testimonials = [
    {
        name: '- Harriet K',
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        text: "Just what I was looking for. I like Apple more and more each day because it makes my life a lot easier. I am really satisfied with my Apple. No matter where you go, Apple is the coolest, most happening thing around!",
    },
    {
        name: '- Joab L.',
        photoUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        text: "Really good. Without Apple, we would have gone bankrupt by now. I am completely blown away. I didn't even need training.",
    },
    {
        name: '- Maurita R.',
        photoUrl: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        text: "I have gotten at least 50 times the value from Apple. Since I invested in Apple I made over 100,000 dollars profits."
    }

];
const imgE1 = document.querySelector('img');
const textE1 = document.querySelector('.text');
const usernameE1 = document.querySelector('.userName');
let idx = 0;
updateTestimonial();
function updateTestimonial() {
    const {name, photoUrl,text} = testimonials[idx];
    imgE1.src = photoUrl
    textE1.innerText = text;
    usernameE1.innerText = name;
    idx++
    if(idx === testimonials.length){
        idx= 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    },10000)
}
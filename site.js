// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


//https://api.whatsapp.com/send?text=[post-title] [post-url]

const whatsappBtn = document.querySelector("whatsapp-btn");

function initialize() {
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Hello people, Come an look at my technical CV");

    whatsappBtn.setAttribute("href", `https://api.whatsapp.com/send?text=${postTitle}&${postUrl}`);
}
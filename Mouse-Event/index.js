const containerE1 = document.querySelector('.container');
// to wrap alt+ c to wrap in vs-code
window.addEventListener("mousemove", (event) => {
    console.log(event);
    containerE1.innerHTML = `<div class="mouse-event">
    ${event.clientX}
20
<h4>Mouse X Position(px)</h4>
</div>
<div class="mouse-event">
${event.clientX}
20
<h4>Mouse Y Position(px)</h4>
</div>`
});
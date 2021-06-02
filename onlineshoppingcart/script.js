var butn=document.getElementById("btn")


butn.addEventListener("click",()=>{
    createNotification();
})

function createNotification()
{
    const notif=document.createElement("div");
    notif.classList.add("toast")
    notif.innerText="This is good practice";
    container.appendChild(notif);
    setTimeout(()=>{
        notif.remove();
    },3000);
}

const container = document.getElementById("container");
const img = document.querySelector("img");

container.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x, y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
});

container.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
});
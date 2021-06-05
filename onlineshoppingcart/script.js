var btn=document.querySelector("button")

btn.addEventListener('click',()=>{
  alert('lol')
})

btn.addEventListener('click', (e) => {
    addToCart(e.currentTarget)
  })
  
  const addToCart = (product) => {
    const productId = $(product).attr('productId');
    const isAlreadyInCart = $.grep(productsInCart, el => {return el.id == productId}).length;
  
    if (isAlreadyInCart) {
      $.each(storageData, (i, el) => {
        if (productId == el.id) {
          el.itemsNumber += 1;
        }
      })
    } else {
      const newProduct = {
        id: Number(productId),
        itemsNumber: 1
      }
  
      storageData.push(newProduct);
    }
  
  }
btn.addEventListener("click",()=>{
    createNotification();
})

function createNotification()
{
    const notif=document.createElement("div");
    notif.classList.add("toast")
    notif.innerText="Product added to cart";
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
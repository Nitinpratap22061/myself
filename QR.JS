
let imgBox=document.getElementById("imgBox")
// console.log(imgBox)
let qrImage=document.getElementById("qrImage")
console.log(qrImage)
let qrText=document.getElementById("qrText")
console.log(qrText)
let btn=document.getElementById("btn")
console.log(btn)
function generateQR(e){
    if(qrText.value.length >0){
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    // alert("clicked")
    imgBox.classList.add("show-Img")
    
    }
    else{
        qrText.classList.add("error")
        setTimeout(() => {
            qrText.classList.remove("error")
        }, 1000);
    }
}
btn.addEventListener("click",generateQR)

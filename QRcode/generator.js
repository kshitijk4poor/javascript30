const imgBox = document.getElementById("QRcode");
const Image = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

function generateQR(){
    Image.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add("show");
}
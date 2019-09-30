var order={
    address:{
        emailAddress='',
        addressLine1='',
        addressLine2='',
        addressLine3='',
        zipCode='',
        phoneNumber='',
    }
};
function saveAddress(){
    order.address.emailAddress=document.getElementById('inputEmail').value;
    order.address.addressLine1=document.getElementById('inputAddress1').value;
    order.address.addressLine2=document.getElementById('inputAddress2').value;
    order.address.addressLine3=document.getElementById('inputAddress3').value;
    order.address.zipCode=document.getElementById('zipCode').value;
    order.address.phoneNumber=document.getElementById('phoneNumber').value;
    var modal = document.getElementById("saveAddressModal");
    modal.style.display = "none";
}

const cardnumber = document.getElementById('cardnumber')
const holdername = document.getElementById('holdername')
const confirmbtn = document.getElementById('confirm')
const expirationdate = document.getElementById('expirationdate');
const cardnumberoncard = document.getElementById('cardnumber1')
const nameoncard = document.getElementById('holdernameoncard')
const dateoncard = document.getElementById('dateoncard')
const cvconcard = document.getElementById('cvconcard')
const securitycode = document.getElementById('securitycode')
const form = document.getElementById('form-container')
const completesection = document.getElementById('complete')
const cardErrorText = document.getElementById('carderrortext')
const dateErrorText = document.getElementById('dateerrortext')
const nameErrorText = document.getElementById('nameerrortext')
const cvcErrorText = document.getElementById('cvcerrortext')

confirmbtn.addEventListener('click', function() {})
cardnumber.addEventListener('keyup', function() {cardnumberoncard.textContent = cardnumber.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()})
holdername.addEventListener('keyup', function() {nameoncard.textContent = holdername.value})
expirationdate.addEventListener('keyup', function() {dateoncard.textContent = expirationdate.value})
securitycode.addEventListener('keyup', function() {cvconcard.textContent = securitycode.value})


function formatString(e) {
    var inputChar = String.fromCharCode(event.keyCode);
    var code = event.keyCode;
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }
  
    event.target.value = event.target.value.replace(
      /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
    ).replace(
      /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
    ).replace(
      /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
    ).replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
    ).replace(
      /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
    ).replace(
      /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
    ).replace(
      /\/\//g, '/' // Prevent entering more than 1 `/`
    );
}

confirmbtn.addEventListener('click', function(){
    if(cardnumber.value.length == 16 && holdername.value.length >= 4 && expirationdate.value.length == 5 && securitycode.value.length == 3) {
    form.style.display = 'none';
    completesection.style.display = 'flex'
}
    if(cardnumber.value.length < 16) {
        cardnumber.style.border = '1px solid red';
        cardErrorText.style.display = 'block'
    }

    if(cardnumber.value.length == 16) {
        cardnumber.style.border = '1px solid #dcdcdc';
        cardErrorText.style.display = 'none'
    }

    if(expirationdate.value.length < 5) {
        expirationdate.style.border = '1px solid red';
        dateErrorText.style.display = 'block'
    }

    if(expirationdate.value.length == 5) {
        expirationdate.style.border = '1px solid #dcdcdc';
        dateErrorText.style.display = 'none'
    }

    if(holdername.value.length < 4) {
        nameErrorText.style.display = 'block';
        holdername.style.border = '1px solid red'
    }

    if(holdername.value.length >= 4) {
        nameErrorText.style.display = 'none';
        holdername.style.border = '1px solid #dcdcdc'
    }

    if(securitycode.value.length < 3) {
        cvcErrorText.style.display = 'block';
        securitycode.style.border = '1px solid red'
    }

    if(securitycode.value.length == 3) {
        cvcErrorText.style.display = 'none';
        securitycode.style.border = '1px solid #dcdcdc'
    }



})

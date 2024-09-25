// ---------- GET ACCOUNT BALANCE AMOUNT ----------
function getTagValueById(id){
    const  accountBalanceAmount= document.getElementById(id).innerText;
    const accountBalance = accountBalanceAmount.split(' ');
    return parseFloat(accountBalance[0]);
}


// ---------- GET FUND RAISED AMOUNT ----------
function getButtonValue(id){
    const buttonText = document.getElementById(id).innerText;
    const fundRaisedMoney = buttonText.split(' ');
    return parseFloat(fundRaisedMoney[0]);
}


// ---------- GET FUND DONATE AMOUNT ----------
function getInputFieldValueById(id){
    const inputDonateAmount = document.getElementById(id).value;
    return parseFloat(inputDonateAmount);
}


// ---------- DO VERIFICATION FOR DONATE AMOUNT ----------
function letVerifyDonateAmount(value){
    if(isNaN(value) || (value <= 0)){
        return 0;
    }
    else
        return value;
}


// ---------- UPDATE RAISED AMOUNT IN DOM/UI ----------
function updateRaisedAmountButton(value, id){
    const updateValue = value + ' BDT';
    document.getElementById(id).innerHTML = updateValue;
}


// ---------- UPDATE ACCOUNT BALANCE IN DOM/UI ----------
function updateAccountBalance(value, id){
    const updateValue = value + ' BDT';
    document.getElementById(id).innerHTML = updateValue;
}


// ---------- TOOGLE BETWEEN 'DONATE & HISTORY' PAGE ----------
function showFormById(id){
    document.getElementById('donate-page').classList.add('hidden');
    document.getElementById('transection-page').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

document.getElementById('feni-donate-btn')
    .addEventListener('click', function(event){
        // ---------- PREVENT DEFAULT BEHAVIOR (RELOADING BROWSER) ----------
        event.preventDefault();

        // ---------- GET THE DONATION AMOUNT FOR FENI ----------
        const donateAmount = getInputFieldValueById('feni-donate-amount');


        // ---------- GET THE ACCOUNT BALANCE ----------
        const accountBalanceBeforeDonate = getTagValueById('account-balance');

        
        // ---------- VERIFICATION FOR DONATE AMOUNT ----------
        const verifyResult = letVerifyDonateAmount(donateAmount);
        if(verifyResult === 0)
            return alert('Enter a Valid Amount');
        else if(verifyResult>accountBalanceBeforeDonate)
            return alert('Not sufficient balance');


        // ---------- POPUP THE MODAL ----------
        const dialog = document.getElementById('my_modal_1');
        dialog.showModal();
        

        // ---------- GET FUND RAISED AMOUNT FOR FENI ----------
        const previousRaisedAmount = getButtonValue('feni-raised-fund-amount');


        // ---------- UPADATE RAISED AMOUNT FOR FENI IN DOM/UI ----------
        const totalRaisedAmount = previousRaisedAmount + verifyResult;
        updateRaisedAmountButton(totalRaisedAmount, 'feni-raised-fund-amount');


        // ---------- UPADATE ACCOUNT BALANCE IN DOM/UI ----------
        const curretAccountBalance = accountBalanceBeforeDonate - donateAmount;
        updateAccountBalance(curretAccountBalance, 'account-balance');


        // ---------- SHOW IN THE TRANSECTION HISTORY ----------
        const div = document.createElement('div');
        div.classList.add('mb-8', 'p-8', 'border-2', 'border-nav-color', 'rounded-2xl');
        div.innerHTML = 
        `<h4 class="text-xl font-bold text-textHeadline-color mb-3">${donateAmount} Taka is Donated for Flood Relief in Feni, Bangladesh</h4>`
        div.innerHTML += 
        `<p class="text-base text-textBody-color font-light">Date: ${new Date()}</p>`
        document.getElementById('transection-container').appendChild(div);
    })
    
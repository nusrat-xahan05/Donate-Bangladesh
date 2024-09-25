document.getElementById('quota-donate-btn')
    .addEventListener('click', function(event){
        // ---------- PREVENT DEFAULT BEHAVIOR (RELOADING BROWSER) ----------
        event.preventDefault();

        // ---------- GET THE DONATION AMOUNT FOR QUOTA ----------
        const donateAmount = getInputFieldValueById('quota-donate-amount');


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
        

        // ---------- GET FUND RAISED AMOUNT FOR QUOTA ----------
        const previousRaisedAmount = getButtonValue('quota-raised-fund-amount');


        // ---------- UPADATE RAISED AMOUNT FOR QUOTA IN DOM/UI ----------
        const totalRaisedAmount = previousRaisedAmount + verifyResult;
        updateRaisedAmountButton(totalRaisedAmount, 'quota-raised-fund-amount');


        // ---------- UPADATE ACCOUNT BALANCE IN DOM/UI ----------
        const curretAccountBalance = accountBalanceBeforeDonate - donateAmount;
        updateAccountBalance(curretAccountBalance, 'account-balance');


        // ---------- SHOW IN THE TRANSECTION HISTORY ----------
        const div = document.createElement('div');
        div.classList.add('mb-8', 'p-8', 'border-2', 'border-nav-color', 'rounded-2xl');
        div.innerHTML = 
        `<h4 class="text-xl font-bold text-textHeadline-color mb-3">${donateAmount} Taka is Donated for Injured in the Quota Movement</h4>`
        div.innerHTML += 
        `<p class="text-base text-textBody-color font-light">Date: ${new Date()}</p>`
        document.getElementById('transection-container').appendChild(div);
    })

document.getElementById('donate-page-btn')
    .addEventListener('click', function(){
        document.getElementById('donate-page-btn').classList.add('bg-highlighted-color', 'border-2', 'border-highlighted-color');
        document.getElementById('transection-page-btn').classList.remove('bg-highlighted-color', 'border-highlighted-color');
        document.getElementById('transection-page-btn').classList.add('border-state-300');
        showFormById('donate-page')
    })


document.getElementById('transection-page-btn')
    .addEventListener('click', function(){
        document.getElementById('transection-page-btn').classList.add('bg-highlighted-color', 'border-2', 'border-highlighted-color');
        document.getElementById('donate-page-btn').classList.remove('bg-highlighted-color', 'border-highlighted-color');
        document.getElementById('donate-page-btn').classList.add('border-state-300');
        showFormById('transection-page')
    })


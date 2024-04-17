document.addEventListener('keydown', function(event){
    if(event.ctrlKey && event.key === 'q'){
        window.location.href = '#sobre'
    }

    if(event.ctrlKey && event.key === 'i'){
        window.open('https://visualstudio.microsoft.com/pt-br/')
    }

    if(event.ctrlKey && event.key === 'm'){
        document.getElementById('message-input').focus()
    }
})

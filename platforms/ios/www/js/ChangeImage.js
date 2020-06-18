function GetVela(op){
    if (op == 1){
        const img =  document.getElementById('vela')
        img.src = "img/calma.gif"
    }else if (op == 2){
            const img =  document.getElementById('vela')
            img.src = "img/agitada.gif"
    }else if (op == 3){
                const img =  document.getElementById('vela')
                img.src = "img/media.gif"
    }
}
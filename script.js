

window.onload = () => {
    const emojRange = [
        [128513, 128591],
        [9986, 10160],
        [128640, 128704]
      ];
    const allSimbols = 1112064
    let i = 0
    let autho_scrol = true
    let scroll_pos = (window.pageYOffset || document.documentElement.scrollTop)
    const body = document.body || document.getElementsByName("body")
    const timer = document.createElement("p")
    const scroll = document.createElement("p")
    const cache = document.createElement("input")
    timer.innerText = 0
    body.appendChild(timer)
    const copy = that => {
        that.select()        
        that.setSelectionRange(0, 99999)
        document.execCommand("copy");
    }
    const interval = setInterval(()=>{
        const el = document.createElement("div");
        el.innerHTML = `&#${i};`;
        timer.innerText = i
        el.dataset.symbol = String.fromCharCode(i);
        el.dataset.num = i;
        body.appendChild(el);
        i <= allSimbols || clearInterval(interval);
        autho_scrol && window.scrollTo(0,document.body.scrollHeight);
        i++;
    }, 0)
    body.onclick = e => {
        if (e?.target?.dataset?.symbol){
            cache.value = e?.target?.dataset?.symbol
            console.log(cache.value);
            copy(cache)
        }
    }
    
    timer.onclick = () => autho_scrol = true;
    body.onscroll = () => {
        if ((window.pageYOffset || document.documentElement.scrollTop) <= scroll_pos) autho_scrol = false;
        scroll_pos = (window.pageYOffset || document.documentElement.scrollTop)
    }
}
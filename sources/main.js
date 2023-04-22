if (localStorage.getItem("klindos-url")) {
    window.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".install").remove();
        var elmnt = document.createElement("div");
        elmnt.classList.add("container")
        var messageEl = document.createElement("p");
        var anoEl = document.createElement("button");
        var neEl = document.createElement("button");
        anoEl.textContent = "Připojit"
        neEl.textContent = "Změnit"
        var mes = elmnt.appendChild(messageEl)
        mes.textContent = "Loading..."
        var ano = elmnt.appendChild(anoEl)
        var ne = elmnt.appendChild(neEl)
        document.body.appendChild(elmnt)
        fetch(localStorage.getItem("klindos-url"))
        .then(response => response.text())
        .then((response) => {
            if (response.indexOf("klindos") != -1) {
                if (response.indexOf("ReadyForKLINDOSClientTrue")) {
                    mes.textContent = "Server je dostupný! Chcete pokračovat na server nebo chcete změnit server?"
                    ano.onclick = () => {
                        location = localStorage.getItem("klindos-url")
                    }
                    ne.onclick = () => {
                        localStorage.removeItem("klindos-url");
                        window.location.reload()
                    }
                }
                else {
                    mes.textContent = "Tento server není přizpůsobený pro to aby fungoval s KLIND OS Client. Chcete změnit server?"
                    anoEl.textContent = "Ano"
                    neEl.textContent = "Ne"
                    ano.onclick = () => {
                        localStorage.removeItem("klindos-url");
                        window.location.reload();
                    }
                    ne.onclick = () => {
                        window.close();
                    }
                }
            }
            else {
                mes.textContent = "Nastavený server nemá v tuto chvíli KLIND OS nebo nefunguje. Chcete změnit server? Klikněte Ano pokud chcete změnit server Klikněte Ne pro ukončení."
                anoEl.textContent = "Ano"
                neEl.textContent = "Ne"
                ano.onclick = () => {
                    localStorage.removeItem("klindos-url");
                    window.location.reload();
                }
                ne.onclick = () => {
                    window.close();
                }
            }
        })
        .catch(e => {
            mes.textContent = "Nastavený server není v tuto chvíli dostupný. Chcete změnit server? Klikněte Ano pokud chcete změnit server Klikněte Ne pro ukončení."
            ano.textContent = "Ano"
            ne.textContent = "Ne"
            ano.onclick = () => {
                localStorage.removeItem("klindos-url");
                window.location.reload();
            }
            ne.onclick = () => {
                window.close();
            }
        })
    })
}
function submit() {
    var url = document.querySelector("#url").value
    document.querySelector(".message").textContent = "Kontaktuje se server...";
    setTimeout(() => {
        try {
            fetch(url)
            .then((response) => response.text())
            .then((response) => {
                if (response.indexOf("klindows") != -1) {
                    if (response.indexOf("ReadyForKLINDOSClientTrue")!=-1) {
                        localStorage.setItem("klindos-url",url)
                        document.querySelector(".message").textContent = "Server byl nastaven!"
                        window.location.reload()
                    }
                    else {
                        document.querySelector(".message").textContent = "Tento server není přizpůsobený pro to aby fungoval s KLIND OS Client";
                    }
                }
                else {
                    document.querySelector(".message").textContent = "Na tomto serveru neběží KLIND OS!";
                }
            })
            
            
        }
        catch {
            document.querySelector(".message").textContent = "Tento server je nedostupný!"
        }
    }, 500);
}
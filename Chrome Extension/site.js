const saveinput = document.getElementById("saveinputbtn")
const tabinput = document.getElementById("tabinput")
const deleteall = document.getElementById("deleteallbtn")
const tablinksaved = document.getElementById("tablinksaved")
const savetabbtn = document.getElementById("savetabbtn");

let links = []

//localStorage.clear()
if (localStorage.getItem("links")) {
    links = JSON.parse(localStorage.getItem("links"))
}
console.log(typeof links)

let renderlinks = (renderlink) => {
    if (localStorage.getItem("links")) {
        let str = ""
        for (let i = 0; i < renderlink.length; i++) {
            str += `<li>${renderlink[i]}</li>`
        }
        tablinksaved.innerHTML = str
    } else {
        tablinksaved.innerHTML = `No Links Added`
    }

}
renderlinks(links)


saveinput.addEventListener("click", function () {
    links.push(tabinput.value)
    localStorage.setItem("links", JSON.stringify(links))
    renderlinks(links)
})

savetabbtn.addEventListener("click", function () {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        links.push(tabs[0].url)
        localStorage.setItem("links", JSON.stringify(links))
        renderlinks(links)
    });
  
})

deleteall.addEventListener("dblclick", function () {
    links = []
    localStorage.removeItem("links")
    renderlinks(links)
})




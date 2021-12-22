const btns = document.querySelectorAll(".btn");
const exportBtns = document.querySelectorAll(".export");
const exportedContainer = document.querySelector(".exported");
const contentContainer = document.querySelector(".content");

const randomMD = "# h1\n## h2";
const output = marked.parse(randomMD)
console.log(output)

contentContainer.innerHTML = ""

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let command = btn.dataset["element"];
        if(command === "createLink" || command === "insertImage"){
            let url = prompt("Enter link here:", "http://")
            document.execCommand(command, false, url);
            return; 
        }
        document.execCommand(command, false, null);
    })
})

exportBtns.forEach((exportBtn) => {
    exportBtn.addEventListener("click", () => {
        let content = contentContainer.innerHTML;
        if(!content) return alert("You need to write something to export!");
        if(exportBtn.classList.contains("html")){
            exportedContainer.textContent = content;
        }
        if(exportBtn.classList.contains("text")){
            exportedContainer.innerHTML = content;
        }
        if(exportBtn.classList.contains("mkd-html")){
            content = contentContainer.innerText;
            exportedContainer.textContent = marked.parse(content)
        }
        if(exportBtn.classList.contains("mkd-text")){
            content = contentContainer.innerText;
            exportedContainer.innerHTML = marked.parse(content)
            
        }
        console.log(content)
    })
})
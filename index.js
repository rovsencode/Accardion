const buttons = document.querySelectorAll(".event");
const sectionContent=document.querySelectorAll(".container div")
let showedContent = "";
buttons.forEach(function (btn) {
    btn.addEventListener("click", () => {
        showedContent =btn.getAttribute("data-id")      
        sectionContent.forEach(function (content) {
            if (content.id === showedContent) {
                content.classList.remove("d-none")
            }
            else {
                content.classList.add("d-none");
            }         
        })
       
    })
})

    
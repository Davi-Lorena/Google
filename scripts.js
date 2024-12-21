const checkbox = document.getElementById('checkbox')

const body = document.querySelector('body')

const navSpan = Array.from(document.getElementsByClassName('nav-span'))

const figure = document.querySelector('figure')

const svg = document.querySelector('svg')

const loginDiv = document.getElementById('login')

const searchBar = document.getElementById('search-bar')

const buttons = Array.from(document.querySelectorAll('button'))

const nightModeTitle = document.getElementById("night")

const divCheckbox = document.getElementById("check")

const personalizeButton = document.getElementById("button")

const pencil = document.getElementById("pencil")

checkbox.addEventListener("change", (event) => {
    if(event.target.checked) { 

    body.style.backgroundColor = "#202124"
    
    navSpan.forEach(span => {
        span.style.color = "#fff"
    })

    figure.addEventListener("mouseenter", () => {
        figure.style.backgroundColor = "rgba(232, 234, 237, .08)"
         })
         
        figure.addEventListener("mouseleave", () => {
            figure.style.backgroundColor  = "transparent"
             })

    svg.style.color = "#fff"

    loginDiv.style.backgroundColor = "#c2e7ff"
    loginDiv.style.color = "#001d35"

    loginDiv.addEventListener("mouseenter", () => {
        loginDiv.style.filter = "brightness(0.9)"
        })
        
        loginDiv.addEventListener("mouseleave", () => {
            loginDiv.style.filter = "brightness(1)"
            })
    

    searchBar.style.boxShadow = "none"

buttons.forEach(button => {
    button.style.backgroundColor = "#303134"
    button.style.color = "#fff"
    button.style.border = "1px solid #303134"

   button.addEventListener("mouseenter", () => {
       button.style.border = "1px solid #5f6368"
        })
        
       button.addEventListener("mouseleave", () => {
           button.style.border = "1px solid #303134"
            })

})

nightModeTitle.style.color = "#fff"

personalizeButton.style.backgroundColor = "#004a77ff"
personalizeButton.style.color = "#c2e7ffff"

personalizeButton.addEventListener("mouseenter", () => {
personalizeButton.style.filter = "brightness(1.3)"
})

personalizeButton.addEventListener("mouseleave", () => {
    personalizeButton.style.filter = "brightness(1)"
    })

divCheckbox.style.backgroundColor = "#004a77ff"

pencil.setAttribute("src", "./assets/pencil-blue.svg")

    } else {
        body.removeAttribute("style");
        
        navSpan.forEach(span => {
            span.removeAttribute("style");
        });
        
        svg.removeAttribute("style");

        figure.addEventListener("mouseenter", () => {
            figure.style.backgroundColor = "rgba(60, 64, 67, .08)"
             })
             
            figure.addEventListener("mouseleave", () => {
                figure.style.backgroundColor  = "transparent"
                 })
        
        loginDiv.removeAttribute("style");

        loginDiv.addEventListener("mouseenter", () => {
            loginDiv.style.filter = "brightness(1)"
            })
        
        searchBar.removeAttribute("style");
        
        buttons.forEach(button => {
            button.removeAttribute("style");

            button.addEventListener("mouseenter", () => {
                button.style.border = "1px solid #dadce0"
                 })
                 
                button.addEventListener("mouseleave", () => {
                    button.style.border = "1px solid #f8f9fa"
                     })

        });
        
        nightModeTitle.removeAttribute("style");
        
        personalizeButton.removeAttribute("style");

        personalizeButton.addEventListener("mouseenter", () => {
            personalizeButton.style.filter = "brightness(0.95)"
            })
            
            personalizeButton.addEventListener("mouseleave", () => {
                personalizeButton.style.filter = "brightness(1)"
                })

        pencil.setAttribute("src", "./assets/icon_pencil.svg");
        
        divCheckbox.removeAttribute("style");
        
    }
})
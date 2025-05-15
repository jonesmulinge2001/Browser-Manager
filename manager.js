const divExtensions = document.querySelector("#extensions");
const activeBtn = document.getElementById("active");
const inactiveBtn = document.getElementById("Inactive");
const allBtn = document.getElementById("all");
const sunBtn = document.querySelector(".fas .fa-sun .sunBtn");

window.onload = function(){
    getAllBrowserExtensions(browserExtensions);
//    let browserExtensiosn = JSON.parse(localStorage.getItem("extensions"))|| [];
}
 
// function to toggle between dark mode and light mode
// function handleTheme(){
//     const body = document.body;
//     body.classList.toggle("dark");
//     body.classList.toggle("light");
// }

// sunBtn.addEventListener("click",function(){
//     handleTheme();
// })

const browserExtensions = [
    
    {
        name: "DevLens",
        description: "Quickly inspect page layout and visualize element boundaries",
       
        active: true
    },
    {
        name: "StyleSpy",
        description: "Instantly analyze and copy CSS from any webpage element",
       
        active: true
    },
    {
        name: "SpeedBoost",
        description: "Optimizes browser resource usage to accelerate page loading",
     
        active: false
    },
    {
        name: "JSONWizard",
        description: "Formats, validates, and prettifies JSON responses in-browser",
       
        active: true
    },
    {
        name: "TabMaster Pro",
        description: "Organizes browser tabs into groups and sessions",
      
        active: true
    },
    {
        name: "ViewportBuddy",
        description: "Simulates various screen resolutions directly within the browser",
      
        active: false
    },
    {
        name: "Markup Notes",
        description: "Enables annotation and notes directly onto webpages for collaborative debugging",
      
        active: true
    },
    {
        name: "GridGuides",
        description: "Overlay customizable grids and alignment guides on any webpage",
        
        active: false
    },
    {
        name: "Palette Picker",
        description: "Instantly extracts color palettes from any webpage",
       
        active: true
    },
    {
        name: "LinkChecker",
        description: "Scans and highlights broken links on any page",
      
        active: true
    },
    {
        name: "DOM Snapshot",
        description: "Capture and export DOM structures quickly",
 
        active: false
    },
    {
        name: "ConsolePlus",
        description: "Enhanced developer console with advanced filtering and logging",
    
        active: false
    }
];

// add event listener to the active button
activeBtn.addEventListener("click", ()=>{
    filterActiveExtensions(browserExtensions);
})

// add  add event listener to the inactive button
inactiveBtn.addEventListener("click", ()=>{
    filterInactiveExtensions(browserExtensions);
});

//add event listener to the all button
allBtn.addEventListener("click", ()=>{
    getAllBrowserExtensions(browserExtensions);
})

//function to filter based on active status (the ones with true)
function filterActiveExtensions(extensions) {
    divExtensions.innerHTML = '';
    const activeExtensions = extensions.filter(extension =>{
        return extension.active === true;
    }); 

    // loop through active extensions and map the active extensions in a div
    activeExtensions.forEach(extension =>{
        const div = document.createElement('div');
        div.innerHTML = `
            <h1>${extension.name}</h1>
            <p>${extension.description}</p>
            <p>${extension.icon}</p>
            <div class="btnIcon">
                <button>Remove</button>
                <i class='bx bx-toggle-right'></i>
            </div>
        `
        divExtensions.appendChild(div);

    })

    // localStorage.setItem("extension",JSON.stringify(extensions))
};

//function to filter based on active status (the ones with false)
function filterInactiveExtensions(extensions) {
    divExtensions.innerHTML = '';
    const inactiveExtensions = extensions.filter(extension =>{
        return extension.active === false;
    });

    // loop through inactive extensions and map the inactive extensions in a div
    inactiveExtensions.forEach(extension =>{
        const ndiv = document.createElement('div');
        ndiv.innerHTML = `
            <h1>${extension.name}</h1>
            <p>${extension.description}</p>
            <p>${extension.icon}</p>
            <div class="btnIcon">
                <button>Remove</button>
                <i class='bx bx-toggle-left'></i>
            </div>

        `
        divExtensions.appendChild(ndiv);
    })

    // localStorage.setItem("extension",JSON.stringify(extensions))
}

// function to get all the browser extensions
function getAllBrowserExtensions(extensions) {
    divExtensions.innerHTML = ''
    const allExtensions = extensions.filter(extension =>{
        return extension.active === true || extension.active === false;
    });

    allExtensions.forEach(extension =>{
        const div = document.createElement('div');
        div.innerHTML = `
            <h1>${extension.name}</h1>
            <p>${extension.description}</p>
            <p>${extension.icon}</p>
            <button>Remove</button>
        `
        divExtensions.appendChild(div);
    })
    // store extensions to local storage
    // localStorage.setItem("Extensions",JSON.stringify(extensions));

}
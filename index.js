
/* === Imports === */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase,
        ref,
        push,
        onValue,
        remove,
        query,
        set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    databaseURL: "https://physician-tracker-b0fa5-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database, "physician-tracker")

/* === UI === */

/* == UI - Elements and Variables== */
const searchBtn = document.getElementById("search-btn")
const resultsEl = document.getElementById("results-el")
const nameEl = document.getElementById("physName")
const physImage = document.getElementById("phys-image")
const test = document.getElementById("test")

let chdData = []
let searchArray = []
let tempPhysArray = []  //physician array after manipulation
let tempDx = '' //value of chosen diagnosis
let tempIndex = -1
let physicians = []  //array from snapshot values
let phys1 = ''

//This gets the snapshot of the database every time it changes
onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        physicians = Object.values(snapshotValues)
        searchArray = physicians
    }
    snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        chdData = childData
    });
    
})

test.addEventListener("change", function(){
    //Blank out results after clicking a new diagnosis
    resultsEl.textContent = 'Please click Search:'
    nameEl.textContent = ''
    physImage.src = ''
    physImage.style.visibility = "hidden"
})

/* == UI - Event Listeners == */
searchBtn.addEventListener("click", function() {
    //get the value of the test/diagnosis selected
    tempDx = document.getElementById("test").value

    //search for the list of physicians that do the chosen test/diagnosis
    for (let i=0; i<chdData.length; i++) { 
        if(chdData[i].dx === tempDx) {
            tempIndex = i
            
            //call function to get physician name and manipulate array
            findNextPhys(chdData[i].phys) 
            
            //this version of physicians holds the new physician object for the dx chosen
            const queryRef = query(ref(database, 'physicians/'))
           
            //remove the whole array and rewrite it
            remove(referenceInDB)
            push(referenceInDB, chdData)
            break
        }
    }   
} )

function findNextPhys (physFind) {
    let assigned = false
  
    //name of next physician, first phys will be next
    phys1 = physFind[0]

    //get the physician's image here
    renderImage()

    assigned = manipulateArray(phys1, 0, physFind)
}

function manipulateArray(phys, index, arr) {
    resultsEl.textContent = "The next available physician is: "
    nameEl.textContent = phys
    let tempPhys = arr.splice(index, 1)  //remove the one from the list and return the rest as array
    arr.push(phys)    //push the one removed to the end of array
    tempPhysArray = arr
    tempPhys = []
    return true
}

function renderImage() {
    physImage.style.visibility = "visible"
    if(phys1 === 'Mohammad Eslami') {
        physImage.src = "/images/Mohammad Eslami.png"
    } else if(phys1 === 'Adham Abou-Ali') {
        physImage.src = "/images/Adham Abou-Ali.png"
    } else if(phys1 === 'Andrew Lee') {
        physImage.src = "/images/Andrew Lee.png"
    } else if(phys1 === 'Catherine Go') {
        physImage.src = "/images/Catherine Go.png"
    } else if(phys1 === 'Matthew Beasley') {
        physImage.src = "/images/Matthew Beasley.png"
    } else if(phys1 === 'Zach AbuRahma') {
        physImage.src = "/images/Zach AbuRahma.png"
    } else if(phys1 === 'Ali AbuRahma') {
        physImage.src = "/images/Ali AbuRahma.png"
    }
}

//can move initializeArray function here from data.js if the database needs to be recreated
//initializeArray()

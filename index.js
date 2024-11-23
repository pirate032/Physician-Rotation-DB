
/* === Imports === */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase,
        ref,
        push,
        onValue,
        remove,
        query } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"

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

let chdData = []
let searchArray = []
let tempPhysArray = []
let tempDx = ''
let tempIndex = -1
let physicians = []  //array from snapshot values

onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        physicians = Object.values(snapshotValues)
        searchArray = physicians
        console.log(physicians)
    }
    snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        
        chdData = childData
        console.log(chdData)
    });
    
})

/* == UI - Event Listeners == */
searchBtn.addEventListener("click", function() {
    //get the value of the test/diagnosis selected
    let diag = document.getElementById("test").value
    tempDx = diag

    //search for the list of physicians that do the chosen test/diagnosis
    for (let i=0; i<chdData.length; i++) { 
        if(chdData[i].dx === diag) {
            tempIndex = i
            
            //call function to get physician name and manipulate array
            findNextPhys(chdData[i].phys)   //this works as is
            
            //this version of physicians holds the new physician object for the dx chosen
            const queryRef = query(ref(database, 'physicians/'))
           
            console.log(chdData)  //the whole modified array minus the key
            //remove the whole array and rewrite it
            remove(referenceInDB)
            push(referenceInDB, chdData)
            break
        }
    }
    
    //tempDx has the value chosen and searchArray has the correct phys list here
    //tempPhysArray has the phys array that is correct after manipulation
} )

function findNextPhys (physFind) {

    let phys1 = ""
    let assigned = false
    //because of how the array is manipulated, first phys will be next
    phys1 = physFind[0]   //name of next physician
    assigned = manipulateArray(phys1, 0, physFind)
    if(assigned) {
        //not using this right now
    }
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

// function initializeArray() {
//     push(referenceInDB, [
//         {dx:'AAA',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'bowHunter',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'carotidArteryStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Ali AbuRahma","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'carotidBodyTumor',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'celiacArteryCompressionSyndrome',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'claudication',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'disectionChronic',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'DVT',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'ESRD_PCS_AVF_AVGS',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'hdAccess',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'iliacAneurysm',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'lymphedema',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'mayThurner',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'mesentericCeliacStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'nutcrackerSyndrome',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'peripheralArteryOcclusiveDisease',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'poplitealAneurysm',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'pseudoaneurysm',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'raynauds',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'renalArteryStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'renalFMD',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'splenicAneurysm',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'subclavianSteal',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'subclavianArteryStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'temporalArteritis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'varicoseVeins',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'vasculitis',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'venousInsufficiency',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'vertebralArteryStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'williamsSnydrome',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]}
//     ]
//     ) 
// }

  //initializeArray()

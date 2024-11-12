// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    //database URL goes here
    databaseURL: "https://physician-rotation-default-rtdb.firebaseio.com/"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app)
const referenceInDB = ref(database, "physicians")

const searchBtn = document.getElementById("search-btn")
const resultsEl = document.getElementById("results-el")
const nameEl = document.getElementById("physName")

function initializeArray() {
    push(referenceInDB,{dx:'AAA',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'bowHunter',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'carotidArteryStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Ali AbuRahma","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'carotidBodyTumor',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'celiacArteryCompressionSyndrome',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'claudication',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'disectionChronic',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'DVT',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'ESRD_PCS_AVF_AVGS',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'hdAccess',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'iliacAneurysm',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'lymphedema',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'mayThurner',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'mesentericCeliacStenosis',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'nutcrackerSyndrome',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'peripheralArteryOcclusiveDisease',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'poplitealAneurysm',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'pseudoaneurysm',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'raynauds',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'renalArteryStenosis',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'renalFMD',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'splenicAneurysm',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'subclavianSteal',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'subclavianArteryStenosis',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'temporalArteritis',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'varicoseVeins',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'vasculitis',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'venousInsufficiency',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'vertebralArteryStenosis',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
    push(referenceInDB,{dx:'williamsSnydrome',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
}
//The list of physicians that will do each test/diagnosis
const searchArray = [
    //{dx:'AAA',phys:["Mohammad Eslami","Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'bowHunter',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'carotidArteryStenosis',phys:["Mohammad Eslami","Ali AbuRahma","Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'carotidBodyTumor',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'celiacArteryCompressionSyndrome',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'claudication',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'disectionChronic',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'DVT',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'ESRD_PCS_AVF_AVGS',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'hdAccess',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'iliacAneurysm',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'lymphedema',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'mayThurner',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'mesentericCeliacStenosis',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'nutcrackerSyndrome',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'peripheralArteryOcclusiveDisease',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'poplitealAneurysm',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'pseudoaneurysm',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'raynauds',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'renalArteryStenosis',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'renalFMD',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'splenicAneurysm',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'subclavianSteal',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'subclavianArteryStenosis',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'temporalArteritis',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'thoracicAortaAneurysm',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'varicoseVeins',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'vasculitis',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'venousInsufficiency',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'vertebralArteryStenosis',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    //{dx:'williamsSnydrome',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
]

searchBtn.addEventListener("click", function() {
    //get the value of the test/diagnosis selected
    let diag = document.getElementById("test").value
    //search for the list of physicians that do the chosen test/diagnosis
    searchArray.forEach(function(arr){
        if(arr.dx === diag) {
            //call function to get physician name and manipulate array
            findNextPhys(arr.phys)
        }
    })
} )

function findNextPhys (physicians) {
    console.log("physician list before: " + physicians)
    let phys1 = ""
    let assigned = false
    //because of how the array is manipulated, first phys will be next
    phys1 = physicians[0]   //name of next physician
    assigned = manipulateArray(phys1, 0, physicians)
}

function manipulateArray(phys, index, arr) {
    resultsEl.textContent = "The next available physician is: "
    nameEl.textContent = phys
    let tempPhys = arr.splice(index, 1)  //remove the one from the list and return the rest as array
    arr.push(phys)    //push the one removed to the end of array
    console.log("physician list after: " + arr)
    tempPhys = []
    return true
}

initializeArray()
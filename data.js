//create an array of diagnoses
// let diagnoses = [
//         "None",
//         "AAA",
//         "Bow Hunter",
//         "Carotid Artery Stenosis",
//         "Carotid Body Tumor",
//         "Celiac Artery Compression Syndrome",
//         "Claudication",
//         "Dissections - Chronic",
//         "DVT",
//         "ESRD - PCS - AVF - AVGS",
//         "Hemodialysis Access",
//         "Iliac Aneurysm",
//         "Lymphedema",
//         "May-Thurner",
//         "Mesenteric - Celiac Stenosis",
//         "Nutcracker Syndrome",
//         "Peripheral Artery Occlusive Disease",
//         "Popliteal Aneurysm",
//         "Pseudoaneurysm",
//         "Raynauds",
//         "Renal Artery Stenosis",
//         "Renal FMD",
//         "Splenic Aneurysm",
//         "Subclavian Steal",
//         "Subclavian Artery Stenosis",
//         "Temporal Arteritis",
//         "Thoracic Aorta Aneurysm",
//         "Vericose Veins",
//         "Vasculitis",
//         "Venous Insufficiency",
//         "Vertebral Artery Stenosis",
//         "Williams Syndrome",   
// ]

// function render(diagnoses) {
//     let listItems = ""
//     for (let i = 0; i < diagnoses.length; i++) {
//         listItems += `
//             <li>
//                 <a target='_blank' href='${diagnoses[i]}'>
//                     ${diagnoses[i]}
//                 </a>
//             </li>
//         `
//     }
//     diagnosesEl.innerHTML = listItems
// }

//const aaaArray = new SearchArray('AAA',
//    ["Mohammad Eslami","Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])
//const bowHunterArray = new SearchArray('bowHunter',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])
//const carotidArteryStenosisArray = new SearchArray('carotidArteryStenosis',
//    ["Mohammad Eslami","Ali AbuRahma","Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])
//const carotidBodyTumorArray = new SearchArray('carotidBodyTumor',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])    
//const celiacArteryCompressionSyndromeArray = new SearchArray('celiacArteryCompressionSyndrome',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])
//const claudicationArray = new SearchArray('claudication',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])
//const dissectionsChronicArray = new SearchArray('disectionChronic',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])
//const dvtArray = new SearchArray('DVT',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])
//const esrdPcsAvfAvgsArray = new SearchArray('ESRD_PCS_AVF_AVGS',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])
//const hemodialysisAccessArray = new SearchArray('hdAccess',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])
//const iliacAneurysmArray = new SearchArray('iliacAneurysm',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])
//const lymphedemaArray = new SearchArray('lymphedema',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])
//const mayThurnerArray = new SearchArray('mayThurner',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])
//const mesentericCeliacStenosisArray = new SearchArray('mesentericCeliacStenosis',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])
//const nutcrackerSyndromeArray = new SearchArray('nutcrackerSyndrome',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])      
//const peripheralArteryOcclusiveDiseaseArray = new SearchArray('peripheralArteryOcclusiveDisease',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])   
//const poplitealAneurysmArray = new SearchArray('poplitealAneurysm',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])   
//const pseudoaneurysmArray = new SearchArray('pseudoaneurysm',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])  
//const raynaudsArray = new SearchArray('raynauds',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])  
//const renalArteryStenosisArray = new SearchArray('renalArteryStenosis',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]) 
//const renalFmdArray = new SearchArray('renalFMD',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]) 
//const splenicAneurysmArray = new SearchArray('splenicAneurysm',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]) 
//const subclavianStealArray = new SearchArray('subclavianSteal',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]) 
//const subclavianArteryStenosisArray = new SearchArray('subclavianArteryStenosis',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]) 
//const temporalArteritisArray = new SearchArray('temporalArteritis',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]) 
//const thoracicAortaAneurysmArray = new SearchArray('thoracicAortaAneurysm',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]) 
//const vericoseVeinsArray = new SearchArray('varicoseVeins',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]) 
//const vasculitisArray = new SearchArray('vasculitis',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])    
//const venousInsufficiencyArray = new SearchArray('venousInsufficiency',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"])  
//const vertebralArteryStenosisArray = new SearchArray('vertebralArteryStenosis',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]) 
//const williamsSyndromeArray = new SearchArray('williamsSnydrome',
//    ["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]) 


//initializeArray()

// function initializeArray() {
//      console.log("in initalize")
//      push(referenceInDB,{dx:'AAA',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'bowHunter',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'carotidArteryStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Ali AbuRahma","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'carotidBodyTumor',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'celiacArteryCompressionSyndrome',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'claudication',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'disectionChronic',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'DVT',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'ESRD_PCS_AVF_AVGS',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'hdAccess',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'iliacAneurysm',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'lymphedema',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'mayThurner',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'mesentericCeliacStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'nutcrackerSyndrome',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'peripheralArteryOcclusiveDisease',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'poplitealAneurysm',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'pseudoaneurysm',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'raynauds',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'renalArteryStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'renalFMD',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'splenicAneurysm',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'subclavianSteal',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'subclavianArteryStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'temporalArteritis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'varicoseVeins',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'vasculitis',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'venousInsufficiency',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'vertebralArteryStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
//      push(referenceInDB,{dx:'williamsSnydrome',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]})
// }

function initializeArray() {
    push(referenceInDB,
        {dx:'AAA',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'bowHunter',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'carotidArteryStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Ali AbuRahma","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'carotidBodyTumor',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'celiacArteryCompressionSyndrome',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'claudication',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'disectionChronic',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'DVT',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'ESRD_PCS_AVF_AVGS',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'hdAccess',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'iliacAneurysm',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'lymphedema',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'mayThurner',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'mesentericCeliacStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'nutcrackerSyndrome',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'peripheralArteryOcclusiveDisease',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'poplitealAneurysm',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'pseudoaneurysm',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'raynauds',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'renalArteryStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'renalFMD',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'splenicAneurysm',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'subclavianSteal',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'subclavianArteryStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'temporalArteritis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'varicoseVeins',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'vasculitis',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'venousInsufficiency',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'vertebralArteryStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
        {dx:'williamsSnydrome',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]}
    ) 
}

//The list of physicians that will do each test/diagnosis
//const searchArray = [
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
//]


//The original stuff from realtime database setup:
// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
//import { getDatabase, ref, push, onValue, remove, set, update, child, orderByChild, query, equalTo } 
//    from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//const firebaseConfig = {
    //database URL goes here
//    databaseURL: "https://physician-rotation-default-rtdb.firebaseio.com/"
//}

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//const database = getDatabase(app)
//const referenceInDB = ref(database, "physicians")
//console.log(referenceInDB)
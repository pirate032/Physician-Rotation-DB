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


//initializeArray()

// function initializeArray() {
//     push(referenceInDB,[
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
//         {dx:'thoracicAortaAneurysm',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'varicoseVeins',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'vasculitis',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'venousInsufficiency',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'vertebralArteryStenosis',phys:["Mohammad Eslami","Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]},
//         {dx:'williamsSnydrome',phys:["Catherine Go","Adham Abou-Ali","Matthew Beasley","Andrew Lee","Zach AbuRahma"]}
//     ]
//     ) 
// }


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
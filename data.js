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
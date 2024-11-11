const searchBtn = document.getElementById("search-btn")
const resultsEl = document.getElementById("results-el")
const nameEl = document.getElementById("physName")
//The list of physicians that will do each test/diagnosis
const searchArray = [
    {dx:'AAA',phys:["Mohammad Eslami","Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'bowHunter',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'carotidArteryStenosis',phys:["Mohammad Eslami","Ali AbuRahma","Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'carotidBodyTumor',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'celiacArteryCompressionSyndrome',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'claudication',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'disectionChronic',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'DVT',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'ESRD_PCS_AVF_AVGS',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'hdAccess',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {ds:'iliacAneurysm',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {ds:'lymphedema',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'mayThurner',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'mesentericCeliacStenosis',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'nutcrackerSyndrome',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'peripheralArteryOcclusiveDisease',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'poplitealAneurysm',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'pseudoaneurysm',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'raynauds',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'renalArteryStenosis',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'renalFMD',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'splenicAneurysm',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'subclavianSteal',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'subclavianArteryStenosis',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'temporalArteritis',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'thoracicAortaAneurysm',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'varicoseVeins',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'vasculitis',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'venousInsufficiency',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'vertebralArteryStenosis',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
    {dx:'williamsSnydrome',phys:["Matthew Beasley","Andrew Lee","Catherine Go","Zach AbuRahma","Adham Abou-Ali"]},
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
    //go thru list of physicians and call function to manipulate the array
    for (let i=0; i<physicians.length; i++) {
        phys1 = physicians[i]   //name of next physician
        assigned = manipulateArray(phys1, i, physicians) 
            if (assigned) {
                break
            }   
    }
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
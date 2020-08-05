// function createLocationArray(arrayLocation){
export const createLocationArray = (arrayLocation) => {
    let tempLocationArray = []
    let tempLocation = ""
    arrayLocation.map(function(u) {
        let temp = u.node.accessibility_caption
        if(temp !== null){
            if(temp.search(" in ") !== -1){
                let tempTitik = 0
                if(temp.indexOf(". Gambar") === -1){
                    tempTitik = temp.indexOf(". Keterangan")
                }else{
                    tempTitik = temp.indexOf(". Gambar")
                }
                tempLocation = temp.substring(temp.search(" in ")+4, tempTitik)
                if(tempLocation.search("with") !== -1){
                    tempLocation = tempLocation.substring(0, tempLocation.search("with"))
                }
                if(tempLocation[0] !== '.'){
                    tempLocationArray.push(tempLocation)
                }
            }
        }
    })
    return tempLocationArray
}
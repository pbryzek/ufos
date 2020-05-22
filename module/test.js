////
// D3 Tutorial
////
mfi = d3.select("#mars-featured-image")
mfi.node().html

d3.select(".myclass")

d3.select("#someDiv").append(p)

d3.selectAll("table").style("background-color", "red").attr("class","table-striped")

mfi.style("background-color", "purple")

mfi.style("transform", "rotate(20deg)")
d3.select("body").style("transform", "rotate(-20deg)")

table1 = d3.select("tbody")
dict = {"Mars has Cats?":"Maybe", "Are we in danger?": "Perhaps"}

Object.keys(dict).forEach(function(key){
    let row = table1.append("tr")
    row.append("td").text(key)
    row.append("td").text(dict[key])
})

//Browser Events
function someHandler(){

}
d3.select(someElement).on(someEvent,someHandler)
d3.event //to get info on the last event.target

function fixEverything(){
    d3.select("body").style("transform", "rotate(0)")
    d3.select("#mars-featured-image").style("rotate(0)")
    console.log("Here There")
}

d3.select("#mars-featured-image").on("click", fixEverything)

function massRedOthersBlue(){
    //Grabs d3 directly 
    let myEvent = d3.event
    console.log(myEvent)
}

d3.selectAll("th").on("click", massRedOthersBlue)

function massRedOthersBlue(){
    console.log(d3.event)
    elementsName = this
    element = d3.select(this)
    if (element.text() === "Mass:"){
        element.style("background-color", "red")
    } else {
        element.style("background-color", "blue")
    }
}
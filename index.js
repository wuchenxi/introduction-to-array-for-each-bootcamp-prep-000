function changeCompletely(element, index, array){
     array[index]=element+'!'
}
function doToElementsInArray(array, callback){
  return array.forEach(callback)
}

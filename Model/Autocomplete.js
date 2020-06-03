function Autocomplete(items){
  let listOfItems = items;
  this.filter = (string, max = 10) => {
    let filteredList = listOfItems.filter(item => {
      return item.toLowerCase().indexOf(string.toLowerCase()) >= 0;
    });

    return filteredList.slice(0, max);
  }

  this.addItem = (string) => {
    listOfItems.push(string);
  }

  return this;
}
//get all data of each inventory item
let inventory_items = $('.inventory-item');
let inventory_item_descs = $('.inventory-item-desc');
let inventory_item_years = $('.inventory-item-year');
let inventory_item_makes = $('.inventory-item-make');
let inventory_item_models = $('.inventory-item-model');
let inventory_item_mileages = $('.inventory-item-mileage');
let inventory_item_prices = $('.inventory-item-price');

for(let n = 0; n < inventory_items.length; n++)
{
    console.log(inventory_item_descs[n].innerHTML);
}

//search function
document.getElementById('searchterm').addEventListener('keyup', function(){
    for(let n = 0; n < inventory_items.length; n++)
    {   
        //getting the search term
        searchterm = document.getElementById('searchterm').value;

        //putting the tests outside the if statement so it's easier
        //to read and test etc...
        descs = searchterm.toLowerCase() === inventory_item_descs[n].innerHTML.substring(0, searchterm.length).toLowerCase();        
        years = searchterm.toLowerCase() === inventory_item_years[n].innerHTML.substring(0, searchterm.length).toLowerCase();
        makes = searchterm.toLowerCase() === inventory_item_makes[n].innerHTML.substring(0, searchterm.length).toLowerCase();
        models = searchterm.toLowerCase() === inventory_item_models[n].innerHTML.substring(0, searchterm.length).toLowerCase();

        //checking to see if anything meaningful mathces
        if(descs || years || makes || models)
        {
            inventory_items[n].style.display = 'block';
        }
        else
        {
            inventory_items[n].style.display = 'none';
        }        
    }
})


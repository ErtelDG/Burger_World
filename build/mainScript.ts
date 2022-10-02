//render menu list left side on the html => main function
function menuList() {
   let renderListMain = document.getElementById("renderMenus");
   if (renderListMain != null) {
      renderListMain.innerHTML = "";
   }
   renderMenuesForMenuCard(renderListMain); //render menu list on the card
}

//render basket right side on the html => main function
function basket() {
   let basket = document.getElementById("renderbasket");

   //render when basket have menues
   if (basket != null) {
      basket.innerHTML = " ";
      basket.innerHTML = renderCloseXButtonByResponiseTemplate(); //close "X" button when side is responsive and it was need
      menusWhereAreInBasket(basket); //menues where are in the basket
      renderShippingCostsAndTotal(basket); //render shipping costs and total
   }

   //render when basket have no menues
   if (basketMenu.length <= 0) {
      if (basket != null) {
         basket.innerHTML = " ";
         basket.innerHTML += renderNoteShoppingBasketIsEmptyTemplate(); //render Note Shopping basket is empty
      }
      closeBasket100vwvh(); //auto close basket by responsive side
   }
   showBottomTopWhenAPositionInBasket();
}

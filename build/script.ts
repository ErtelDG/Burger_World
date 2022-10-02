//render menu list left side on the html => main function
function menuList() {
   let renderListMain = document.getElementById("renderMenus");
   if (renderListMain != null) {
      renderListMain.innerHTML = "";
   }
   for (let i = 0; i < menuName.length; i++) {
      let nameMenu: string = menuName[i];
      let ingredientsMenu: string = menuIngredients[i];
      let priceMenu: number = menuPrice[i];
      if (renderListMain != null) {
         renderListMain.innerHTML += renderMenuListTemplate(
            i,
            nameMenu,
            ingredientsMenu,
            priceMenu
         );
      }
   }
}

//render basket right side on the html => main function
function basket() {
   let basket = document.getElementById("renderbasket");

   if (basket != null) {
      basket.innerHTML = " ";
      basket.innerHTML = renderCloseXButtonByResponiseTemplate(); //close "X" button when side is responsive and it was need
      menusWhereAreInBasket(basket); //menues where are in the basket
      renderShippingCostsAndTotal(basket); //render shipping costs and total
   }

   if (basketMenu.length <= 0) {
      if (basket != null) {
         basket.innerHTML = " ";
         basket.innerHTML += renderNoteShoppingBasketIsEmptyTemplate(); //render Note Shopping basket is empty
      }
      closeBasket100vwvh();
   }
   showBottomTopWhenAPositionInBasket();
}

"use strict";
//-------HELP FUNCTION START HERE FOR MAIN FUNCTIONS UP TO DOWN-------------
// -----add a menu to the basket-----
function add(menuNameId, menuPriceId) {
    let menuNameInArray = menuNameId;
    let menuPriceInArray = menuPriceId;
    // check is min. one value in basketMenu
    if (basketMenu.length == 0) {
        basketMenu.push(menuNameInArray);
        basketAmount.push(1);
        basketPrice.push(menuPriceInArray);
    } //is the add menu exists in basketMenu? yes => +1 amount
    else if (basketMenu.findIndex(myFunctionSearchMenuInBasket) >= 0) {
        let indexArray = basketMenu.findIndex(myFunctionSearchMenuInBasket);
        basketAmount[indexArray]++;
    } //is the add menu not exists, add it to the basketMenu
    else {
        basketMenu.push(menuNameInArray);
        basketAmount.push(1);
        basketPrice.push(menuPriceInArray);
    }
    //render basket new
    basket();
    // function to check is menu name in basket
    function myFunctionSearchMenuInBasket(value) {
        return value == menuNameInArray;
    }
}
//-----subtract one menu from the basket----
function subAt1(index) {
    basketAmount[index]--;
    if (basketAmount[index] == 0) {
        basketAmount.splice(index, 1);
        basketMenu.splice(index, 1);
        basketPrice.splice(index, 1);
    }
    basket();
}
//-----add one menu to the basket----
function addAt1(index) {
    basketAmount[index]++;
    basket();
}
//-----show the menues in the basket-----
function showBasket() {
    let showBasketByResponsive = document.getElementById("right-main");
    if (showBasketByResponsive != null) {
        showBasketByResponsive.classList.add("show-basket-100vhvw-by-responsive");
    }
    let closeButtonRightTop = document.getElementById("closeButtonRightTop");
    if (closeButtonRightTop != null) {
        closeButtonRightTop.classList.add("show-button-right-top-by-responsive");
    }
}
//-----disable by responsive, the close X on right top when no menues are in the basket-----
function closeBasket100vwvh() {
    let showBasketByResponsive = document.getElementById("right-main");
    if (showBasketByResponsive != null) {
        showBasketByResponsive.classList.remove("show-basket-100vhvw-by-responsive");
    }
}
//-----enable by responsive, the close X on right top when menues ar in the basket-----
function showBottomTopWhenAPositionInBasket() {
    let showBottomTopWhenAPositionInBasket = document.getElementById("showBottomTopWhenAPositionInBasket");
    if (basketMenu.length <= 0) {
        if (showBottomTopWhenAPositionInBasket != null) {
            showBottomTopWhenAPositionInBasket.classList.add("hidden");
        }
    }
    else {
        if (showBottomTopWhenAPositionInBasket != null) {
            showBottomTopWhenAPositionInBasket.classList.remove("hidden");
        }
    }
}
//-----render menus where they are in the basket----
function menusWhereAreInBasket(basket) {
    for (let i = 0; i < basketMenu.length; i++) {
        let totalPriceOneMenu = (basketPrice[i] * basketAmount[i]).toFixed(2);
        basket.innerHTML += renderMenuesWhereAreInTheBasketTemplate(basketAmount, basketMenu, totalPriceOneMenu, i);
    }
}
//-----render shipping costs and total----
function renderShippingCostsAndTotal(basket) {
    //render shipping costs and total
    let subtotal = 0;
    let shippingCost = 4.9;
    let total = 0;
    for (let i = 0; i < basketAmount.length; i++) {
        subtotal += basketPrice[i] * basketAmount[i];
    }
    if (subtotal >= 40) {
        shippingCost = 0;
    }
    total = subtotal + shippingCost;
    if (subtotal <= 40) {
        basket.innerHTML += HowMuchIsMissingForFreeDeliveryTemplate(subtotal); //render Note how much is missing for free delivery
    }
    basket.innerHTML += renderSubtotalAndGrandTotalTemplate(subtotal, shippingCost, total); //render subtotal and grand total
    // show total in basket by responsive side
    showTotalBasketByResponsive(subtotal, total);
}
//-----show total in basket by responsive side-----
function showTotalBasketByResponsive(subtotal, total) {
    let responsiveBasketTotal = document.getElementById("basket-bottom-total-by-responsive");
    if (responsiveBasketTotal != null) {
        if (subtotal <= 0) {
            responsiveBasketTotal.innerHTML = "0.00 €";
        }
        else
            responsiveBasketTotal.innerHTML = `${total.toFixed(2)} €`;
    }
}

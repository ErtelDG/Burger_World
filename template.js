"use strict";
// function to render menues on the left side
function renderMenuListTemplate(i, nameMenu, ingredientsMenu, priceMenu) {
    return `
      <div class="m-4 p-4 border-solid border-2 relative flex h-min sm:flex-col sm:items-center">
         <div class="w-8/12 sm:text-center sm:flex sm:flex-col sm:items-center sm:w-full">
            <p class="text-lg mb-4 font-bold id="nameMenu${i}">${nameMenu}</p>
            <p class="mb-2">${ingredientsMenu}</p>
         </div>
         <div class="w-4/12 flex justify-end items-end sm:justify-center sm:w-8/12">
            <p class="text-orange-400 text-3xl font-bold sm:text-center" id="priceMenu${i}">
               ${priceMenu.toFixed(2)} €
            </p>
         </div>
         <div onclick="add(menuName[${i}], menuPrice[${i}])" class="absolute top-0 right-0 border-b-2 border-l-2 hover:bg-orange-100"><svg
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
               stroke="currentColor" class="w-8 h-8">
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
         </div>
      </div>`;
}
// function to render close "X" button when side is responsive and it was need
function renderCloseXButtonByResponiseTemplate() {
    return `
   <div id="closeButtonRightTop" class="fixed top-2 right-2 hover:bg-orange-400 hidden show-button-right-top-by-responsive" onclick="closeBasket100vwvh()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-10 h-10 border-b-2 border-4">
         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
   </div>
   `;
}
// render menues where are in the basket
function renderMenuesWhereAreInTheBasketTemplate(basketAmount, basketMenu, totalPriceOneMenu, i) {
    return `
      <div class="p-2 text-sm border-2 my-2">
         <div class="grid grid-cols-8">
            <p class="font-bold col-span-1}">${basketAmount[i]}</p>
            <p class="font-bold col-span-5">${basketMenu[i]}</p>
            <p class="col-span-2 text-right font-semibold">${totalPriceOneMenu}€</p>
         </div>
         <div class="pt-4 grid-cols-8 flex justify-end">
            <p  onclick="subAt1(${i})"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </p>
            <p onclick="addAt1(${i})"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </p>
         </div>
      </div>
      `;
}
// render Note how much is missing for free delivery
function HowMuchIsMissingForFreeDeliveryTemplate(subtotal) {
    return `
   <div class="text-base text-center bg-gray-200 p-2 my-2">
      <div class="">
         <p class="text-sm">Nur noch <b>${(40 - subtotal).toFixed(2)} €</b><br>
            bis zur kostenlosen Zustellung.
         </p>
      </div>
   </div>`;
}
// render subtotal and grand total
function renderSubtotalAndGrandTotalTemplate(subtotal, shippingCost, total) {
    return `
      <div class="text-base text-center p-2 my-2">
         <div class="flex justify-between">
            <p>Zwischensumme</p>
            <p>${subtotal.toFixed(2)} €</p>
         </div>
         <div class="flex justify-between">
            <p>Lieferkosten</p>
            <p>${shippingCost.toFixed(2)} €</p>
         </div>
         <div class="flex justify-between font-bold">
            <p>Gesamt</p>
            <p>${total.toFixed(2)} €</p>
         </div>
         <button class="bg-gray-200 hover:bg-gray-300 w-full font-bold my-4 py-2 px-4 rounded-full">
            Bezahlen (${total.toFixed(2)} €)
         </button>
      </div>
      `;
}
function renderNoteShoppingBasketIsEmptyTemplate() {
    return `
      <div class="p-2 text-sm">
         <div class="text-center border-2 py-4">
            <p class="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                     d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
               </svg>
            </p>
            <p class="pb-2 font-semibold text-lg">Fülle deinen Warenkorb</p>
            <p class="text-xs">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein
               Essen.</p>
            </p>
         </div>
      </div>
      `;
}

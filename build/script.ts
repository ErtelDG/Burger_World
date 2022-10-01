let menuName: string[] = [
   "CLASSIC",
   "V.I.B. CHICKEN",
   "V.I.B. BEEF",
   "LORD BACON",
   "BIG BBQ BANG",
   "MEISTERSTÜCK",
   "Pommes Frites",
   "Country Potatoes",
   "Chicken Nuggets",
   "Miami",
   "Waikiki",
   "Alabama",
   "Florida",
];
let menuIngredients: string[] = [
   "Frisches Rindfleisch (150 g), Cheddar, Gurken-Relish, Tomaten, Eisbergsalat, Zwiebeln, BURGERISTA Sauce",
   "Frisch gegrilltes Chicken Filet (135 g), Cheddar, Eisbergsalat, Tomaten, Zwiebeln, Smokey Sauce, V.I.B. Sauce",
   "Frisches Rindfleisch (150 g), Cheddar, Eisbergsalat, Tomaten, Zwiebeln, Smokey Sauce, V.I.B. Sauce",
   "Frisches Rindfleisch (150 g), Cheddar, gegrillter Speck, Tomaten, Eisbergsalat, Zwiebeln, BURGERISTA Sauce",
   "Frisches Rindfleisch (150 g), Cheddar, gegrillter Speck, karamellisierte Zwiebeln, Eisbergsalat, Smokey Sauce",
   "Frisches Rindfleisch (150 g), Emmentaler, gegrillter Speck, Champignons, karamellisierte Zwiebeln, Eisbergsalat, BURGERISTA Sauce",
   "Knusprig lecker",
   "Kräftig würzig",
   "Leicht und lecker",
   "Knackig-frischer Blattsalat mit frischen Tomaten, Gurken, Cole Slaw, Kartoffelsalat und Rettich",
   "Gegrillte Putenstreifen, Orangenfilets, Tomaten und Gurken",
   "Panierte Champignons, Mais, Tomate, Gurken mit Knoblauch-Dip",
   "Putenfilet in Kokos-Panade, Ananas, Banane, Walnüsse, Tomaten und Gurke",
];
let menuPrice: number[] = [
   10.9, 12.9, 12.9, 13.9, 14.9, 15.9, 3.9, 4.4, 4.9, 6.9, 13.9, 13.9, 13.9,
];

let basketMenu: string[] = [];
let basketAmount: number[] = [];
let basketPrice: number[] = [];

//render menu list
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
         renderListMain.innerHTML += `
          <div class="m-4 p-4 border-solid border-2 relative flex h-min sm:flex-col sm:items-center">
                           <div class="w-8/12 sm:text-center sm:flex sm:flex-col sm:items-center sm:w-full">
                              <p class="text-lg mb-4 font-bold id="nameMenu${i}">${nameMenu}</p>
                              <p class="mb-2">${ingredientsMenu}</p>
                           </div>
                           <div class="w-4/12 flex justify-end items-end sm:justify-center sm:w-8/12">
                              <p class="text-orange-400 text-3xl font-bold sm:text-center" id="priceMenu${i}">${priceMenu.toFixed(
            2
         )} €</p>
                           </div>
                           <div onclick="add(menuName[${i}], menuPrice[${i}])" class="absolute top-0 right-0 border-b-2 border-l-2 hover:bg-orange-100"><svg
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                 stroke="currentColor" class="w-8 h-8">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg>
                           </div>
                        </div>`;
      }
   }
}

//render basket
function basket() {
   let basket = document.getElementById("renderbasket");

   if (basket != null) {
      basket.innerHTML = " ";
      for (let i = 0; i < basketMenu.length; i++) {
         let totalPriceOneMenu = (basketPrice[i] * basketAmount[i]).toFixed(2);
         basket.innerHTML += `
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

      //render shipping costs and total
      let subtotal: number = 0;
      let shippingCost: number = 4.9;
      let total: number = 0;

      for (let i = 0; i < basketAmount.length; i++) {
         subtotal += basketPrice[i] * basketAmount[i];
      }
      if (subtotal >= 40) {
         shippingCost = 0;
      }
      total = subtotal + shippingCost;

      if (subtotal <= 40) {
         basket.innerHTML += `
                     <div class="text-base text-center bg-gray-200 p-2 my-2">
                        <div class="">
                           <p class="text-sm">Nur noch <b>${(
                              40 - subtotal
                           ).toFixed(
                              2
                           )} €</b> <br>bis zur kostenlosen Zustellung.</p>
                        </div>
                     </div>`;
      }

      basket.innerHTML += `
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

   if (basketMenu.length <= 0) {
      if (basket != null) {
         basket.innerHTML = " ";
         basket.innerHTML += `
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
   }
}

// add a menu to the basket
function add(menuNameId: string, menuPriceId: number) {
   let menuNameInArray: string = menuNameId;
   let menuPriceInArray: number = menuPriceId;

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

   //render basket
   basket();

   // function to check is menu name in basket
   function myFunctionSearchMenuInBasket(value: string) {
      return value == menuNameInArray;
   }
}

function subAt1(index: number) {
   basketAmount[index]--;
   if (basketAmount[index] == 0) {
      basketAmount.splice(index, 1);
      basketMenu.splice(index, 1);
      basketPrice.splice(index, 1);
   }
   basket();
}

function addAt1(index: number) {
   basketAmount[index]++;
   basket();
}

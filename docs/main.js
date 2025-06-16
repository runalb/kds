(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<!-- <router-outlet></router-outlet> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Header for the KDS window --->\n\n<div class=\"header\">\n    <div class=\"header-container\">\n        <!-- Logo Section -->\n        <div class=\"logo-section\">\n            <div class=\"logo\">Digirestro</div>\n            <div class=\"kds-welcome\">\n                <ng-container *ngFor=\"let kds of kdsTypes\">\n                    <span *ngIf=\"kds.value==selectedKdsType\">Welcome to {{kds.name}}</span>\n                </ng-container>\n            </div>\n        </div>\n\n        <!-- Navigation Section -->\n        <div class=\"nav-section\">\n            <button (click)=\"switchOrderTab()\" class=\"nav-button\" [class.active]=\"activeOrderTab === 'restaurant'\">\n                <i class=\"material-icons\">restaurant</i>\n                Restaurant\n            </button>\n            <button (click)=\"switchOrderTab()\" class=\"nav-button\" [class.active]=\"activeOrderTab === 'online'\">\n                <i class=\"material-icons\">cloud</i>\n                Online\n            </button>\n        </div>\n\n        <!-- Status Section -->\n        <div class=\"status-section\">\n            <ng-container *ngIf=\"this.activeOrderTab === 'restaurant'\">\n                <div class=\"connection-status\">\n                    <i class=\"material-icons\" [class.connected]=\"this.socket.connected\" [class.disconnected]=\"!this.socket.connected\">\n                        {{this.socket.connected ? 'desktop_windows' : 'desktop_access_disabled'}}\n                    </i>\n                    <span class=\"status-text\">{{this.socket.connected ? 'Connected' : 'Disconnected'}}</span>\n                </div>\n\n                <div class=\"time-display\">\n                    <div class=\"current-time\">{{ myDate | date: 'hh:mm:ss a'}}</div>\n                    <div class=\"socket-info\">Socket IP: {{address}}</div>\n                </div>\n\n                <button (click)=\"SoketIpDialogshow()\" class=\"action-button\">\n                    <i class=\"material-icons\">settings</i>\n                    Socket IP\n                </button>\n\n                <!-- Configuration Button -->\n                <button (click)=\"MapCategoriesDialogshow()\" class=\"config-button\">\n                    <i class=\"material-icons\">settings</i>\n                    Settings\n                </button>\n            </ng-container>\n\n            <ng-container *ngIf=\"this.activeOrderTab === 'online'\">\n                <div class=\"connection-status\">\n                    <i class=\"material-icons\" [class.connected]=\"this.socket.connected\" [class.disconnected]=\"!this.socket.connected\">\n                        {{this.socket.connected ? 'cloud_done' : 'cloud_off'}}\n                    </i>\n                    <span class=\"status-text\">{{this.socket.connected ? 'Online' : 'Offline'}}</span>\n                </div>\n\n                <div class=\"time-display\">\n                    <div class=\"current-time\">{{ myDate | date: 'hh:mm:ss a'}}</div>\n                    <div class=\"user-info\">Username: Runal</div>\n                </div>\n\n                <button *ngIf=\"!isLoggedIn\" (click)=\"LoginDialogshow()\" class=\"action-button\">\n                    <i class=\"material-icons\">account_circle   </i>\n                    Login\n                </button>\n                <button *ngIf=\"isLoggedIn\" (click)=\"isLoggedIn = false\" class=\"action-button\">\n                    <i class=\"material-icons\">logout</i>\n                    Logout\n                </button>\n                \n                <!-- Configuration Button -->\n                <button (click)=\"MapCategoriesDialogshow()\" class=\"config-button\">\n                    <i class=\"material-icons\">settings</i>\n                    Settings\n                </button>\n            </ng-container>\n        </div>\n\n    </div>\n</div>\n\n<!-- SoketIp Dialog to enter the Ip address to connect to the server App--->\n\n<mdl-dialog #SoketIpDialog [mdl-dialog-config]=\"{\n    clickOutsideToClose: false,\n    styles:{'width': '400px','height': 'auto','max-width': '90vw', 'padding':'0px'},\n    isModal:true,\n    enterTransitionDuration: 300,\n    leaveTransitionDuration: 300}\" (show)=\"SoketIpDialogShow(dialogRef)\" (hide)=\"SoketIpDialogHide()\">\n\n    <div class=\"dialog-header\">\n        <h2 class=\"dialog-title\">Socket IP Configuration</h2>\n        <button class=\"close-button\" (click)=\"SoketIpDialog.close()\">\n            <i class=\"material-icons\">close</i>\n        </button>\n    </div>\n\n    <div class=\"dialog-content\">\n        <mdl-textfield label=\"IP Address\" [formControl]=\"soketIpValue\" floating-label type=\"text\" min=\"0\"\n            pattern=\"-?[0-9]*(\\.[0-9]+)?\" class=\"full-width\"></mdl-textfield>\n    </div>\n    <div class=\"dialog-actions\">\n        <button (click)=\"changeSocketIp()\"\n            class=\"primary-button\">\n            Save Socket IP\n        </button>\n    </div>\n</mdl-dialog>\n\n<!-- Dialog to display Map Categories -->\n<mdl-dialog #MapCategoriesDialog [mdl-dialog-config]=\"{\n    clickOutsideToClose: true,\n    styles: {'width': '400px', 'height': 'auto', 'max-width': '90vw','padding':'0px'},\n    isModal: true,\n    enterTransitionDuration: 300,\n    leaveTransitionDuration: 300}\" (show)=\"MapCategoriesDialogShow(dialogRef)\" (hide)=\"MapCategoriesDialogHide()\">\n\n    <div class=\"dialog-header\">\n        <h2 class=\"dialog-title\">KDS Settings</h2>\n        <button class=\"close-button\" (click)=\"MapCategoriesDialog.close()\">\n            <i class=\"material-icons\">close</i>\n        </button>\n    </div>\n\n    <div class=\"dialog-content\">\n        <div class=\"section\">\n            <h3>KDS Type</h3>\n            <div class=\"radio-group\">\n                <label *ngFor=\"let kds of kdsTypes\" class=\"radio-label\">\n                    <input type=\"radio\" name=\"kdsType\" [value]=\"kds.value\" (change)=\"changeKDSType($event)\" [checked]=\"kds.value == selectedKdsType\">\n                    <span>{{kds.name}}</span>\n                </label>\n            </div>\n        </div>\n\n        <div class=\"section\">\n            <div class=\"section-header\">\n                <h3>Map Categories</h3>\n                <button *ngIf=\"this.socket.connected\" (click)=\"selectAllCategories()\" class=\"secondary-button\">\n                    Select All\n                </button>\n            </div>\n\n            <div class=\"categories-list\">\n                <div *ngFor=\"let category of categoriesList\" class=\"category-item\">\n                    <label class=\"checkbox-label\">\n                        <input type=\"checkbox\" [(ngModel)]=\"category.showCategoryFlag\">\n                        <span>{{ category.menu_type }}</span>\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"dialog-actions\">\n        <button (click)=\"saveCategoriesToKDS()\" class=\"primary-button\">\n            Save Configuration\n        </button>\n    </div>\n</mdl-dialog>\n\n<!-- Login Dialog -->\n<mdl-dialog #LoginDialog [mdl-dialog-config]=\"{\n    clickOutsideToClose: false,\n    styles: {'width': '400px', 'height': 'auto', 'max-width': '90vw','padding':'0px'},\n    isModal: true,\n    enterTransitionDuration: 300,\n    leaveTransitionDuration: 300}\" (show)=\"LoginDialogShow(dialogRef)\" (hide)=\"LoginDialogHide()\">\n\n    <div class=\"dialog-header\">\n        <h2 class=\"dialog-title\">Login</h2>\n        <button class=\"close-button\" (click)=\"LoginDialog.close()\">\n            <i class=\"material-icons\">close</i>\n        </button>\n    </div>\n\n    <div class=\"dialog-content\">\n        <mdl-textfield label=\"Username\" [formControl]=\"usernameValue\" floating-label type=\"text\" class=\"full-width\"></mdl-textfield>\n        <mdl-textfield label=\"Password\" [formControl]=\"passwordValue\" floating-label type=\"password\" class=\"full-width\"></mdl-textfield>\n    </div>\n\n    <div class=\"dialog-actions\">\n        <button (click)=\"handleLogin()\" class=\"primary-button\">\n            Login\n        </button>\n    </div>\n</mdl-dialog>\n\n<!--To show kdscocketclient window if IP adress is present-->\n<app-kdscocketclient *ngIf=\"activeOrderTab === 'restaurant'\"></app-kdscocketclient>\n<app-onlineorders *ngIf=\"activeOrderTab === 'online'\"></app-onlineorders>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kdscocketclient/kdscocketclient.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kdscocketclient/kdscocketclient.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br>\n\n<!-- No Orders State -->\n<div *ngIf=\"KotorderList.length == 0\" class=\"empty-state\">\n    <img src=\"assets/img/logo_2.png\" alt=\"Digirestro Logo\" class=\"empty-state-logo\" />\n    <div class=\"empty-state-content\">\n        <h2>No Orders</h2>\n        <div class=\"loading-spinner\">\n            <mdl-spinner [active]=\"true\"></mdl-spinner>\n        </div>\n        <p>Waiting for orders...</p>\n    </div>\n</div>\n\n<!-- Orders Grid -->\n<div class=\"orders-grid\">\n    <ng-container *ngFor=\"let Kotorder of KotorderList; let i = index\">\n        <div class=\"order-card\" *ngIf=\"Kotorder.showflag && Kotorder.orderStatus == 'pending'\">\n            <!-- Order Header -->\n            <div class=\"order-header\">\n                <div class=\"order-info\">\n                    <div class=\"table-info\">\n                        <i class=\"material-icons\">event_seat</i>\n                        <span>{{Kotorder.tableName}}</span>\n                    </div>\n                    <div class=\"time-info\">\n                        <i class=\"material-icons\">access_time</i>\n                        <span>\n                            {{ math.floor(((math.abs(this.myDate -  Kotorder.dateTimeForDisplay) / 1000 ) / 3600 ) % 24) }} :\n                            {{ math.floor(((math.abs(this.myDate -  Kotorder.dateTimeForDisplay) / 1000 ) / 60) % 60) }} :\n                            {{ math.floor((math.abs(this.myDate -  Kotorder.dateTimeForDisplay) / 1000 ) % 60) }}\n                        </span>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Cancelled Items -->\n            <div class=\"cancelled-items\" *ngIf=\"Kotorder.cancelDishList\">\n                <div *ngFor=\"let canceldish of Kotorder.cancelDishList\">\n                    <p class=\"cancelled-item\" *ngIf=\"canceldish.kdsFlag === true\">\n                        {{canceldish.quantity_dish}} x {{canceldish.dish_name}}\n                    </p>\n                </div>\n            </div>\n\n            <!-- Order Items -->\n            <div class=\"order-items\">\n                <ng-container *ngFor=\"let dish of Kotorder.dishList\">\n                    <!-- KDS View -->\n                    <ng-container *ngIf=\"selectedKdsType=='kds'\">\n                        <div class=\"order-item\" *ngIf=\"dish.kdsFlag === true && dish.showCategoryFlag === true\"\n                            [ngClass]=\"{'completed': dish.recentDishQuantity == 0}\">\n                            <div class=\"item-content\">\n                                <div class=\"quantity-circle\">\n                                    {{dish.recentDishQuantity == 0 ? dish.quantity_dish : dish.recentDishQuantity}}\n                                </div>\n                                <div class=\"item-details\">\n                                    <div class=\"item-name\">\n                                        <span class=\"item-multiplier\">×</span>\n                                        {{dish.dish_name}}\n                                    </div>\n                                    <div class=\"item-remarks\" *ngIf=\"dish.remark && dish.remark.trim()\">\n                                        <i class=\"material-icons\">info</i>\n                                        {{dish.remark}}\n                                    </div>\n                                    <div class=\"item-options\" *ngIf=\"dish.optionName != '--' && dish.dishOptionName != '--'\">\n                                        ({{dish.dish_name === dish.dishOptionName ? dish.optionName : dish.dishOptionName}})\n                                    </div>\n                                </div>\n                                <div class=\"item-actions\">\n                                    <button *ngIf=\"dish.recentDishQuantity !== 0\" \n                                            class=\"action-button\"\n                                            (click)=\"clickoptions(dish,Kotorder)\">\n                                        <i class=\"material-icons\">check</i>\n                                    </button>\n                                    <div *ngIf=\"dish.recentDishQuantity === 0\" class=\"completed-status\">\n                                        <i class=\"material-icons\">done</i>\n                                        <span>Delivered</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-container>\n\n                    <!-- Expo View -->\n                    <ng-container *ngIf=\"selectedKdsType=='expo'\">\n                        <div class=\"order-item\" *ngIf=\"dish.kdsFlag === true && dish.showCategoryFlag === true\"\n                            [ngClass]=\"{'completed': dish.recentDishQuantity == 0}\">\n                            <div class=\"item-content\">\n                                <div class=\"quantity-circle\">\n                                    {{dish.recentDishQuantity == 0 ? dish.quantity_dish : dish.recentDishQuantity}}\n                                </div>\n                                <div class=\"item-details\">\n                                    <div class=\"item-name\">\n                                        <span class=\"item-multiplier\">×</span>\n                                        {{dish.dish_name}}\n                                    </div>\n                                    <div class=\"preparation-status\">\n                                        <span class=\"prepared\">Prepared: {{dish.preparedDishQuantity}}</span>\n                                        <span class=\"total\">/ {{dish.quantity_dish}}</span>\n                                    </div>\n                                    <div class=\"item-remarks\" *ngIf=\"dish.remark && dish.remark.trim()\">\n                                        <i class=\"material-icons\">info</i>\n                                        {{dish.remark}}\n                                    </div>\n                                    <div class=\"item-options\" *ngIf=\"dish.optionName != '--' && dish.dishOptionName != '--'\">\n                                        ({{dish.dish_name === dish.dishOptionName ? dish.optionName : dish.dishOptionName}})\n                                    </div>\n                                </div>\n                                <div class=\"item-actions\">\n                                    <button *ngIf=\"dish.recentDishQuantity !== 0\" \n                                            class=\"action-button\"\n                                            (click)=\"clickoptions(dish,Kotorder)\">\n                                        <i class=\"material-icons\">check</i>\n                                    </button>\n                                    <div *ngIf=\"dish.recentDishQuantity === 0\" class=\"completed-status\">\n                                        <i class=\"material-icons\">done</i>\n                                        <span>Delivered</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-container>\n\n                    <!-- Prep View -->\n                    <ng-container *ngIf=\"selectedKdsType=='prep'\">\n                        <div class=\"order-item\" *ngIf=\"dish.kdsFlag === true && dish.showCategoryFlag === true\"\n                            [ngClass]=\"{\n                                'completed': dish.recentDishQuantity == 0,\n                                'prepared': dish.preparedDishQuantity == dish.quantity_dish\n                            }\">\n                            <div class=\"item-content\">\n                                <div class=\"quantity-circle\">\n                                    {{dish.preparedDishQuantity == dish.quantity_dish ? dish.quantity_dish : dish.quantity_dish - dish.preparedDishQuantity}}\n                                </div>\n                                <div class=\"item-details\">\n                                    <div class=\"item-name\">\n                                        <span class=\"item-multiplier\">×</span>\n                                        {{dish.dish_name}}\n                                    </div>\n                                    <div class=\"item-remarks\" *ngIf=\"dish.remark && dish.remark.trim()\">\n                                        <i class=\"material-icons\">info</i>\n                                        {{dish.remark}}\n                                    </div>\n                                    <div class=\"item-options\" *ngIf=\"dish.optionName != '--' && dish.dishOptionName != '--'\">\n                                        ({{dish.dish_name === dish.dishOptionName ? dish.optionName : dish.dishOptionName}})\n                                    </div>\n                                </div>\n                                <div class=\"item-actions\">\n                                    <button *ngIf=\"dish.recentDishQuantity !== 0 && dish.preparedDishQuantity !== dish.quantity_dish\" \n                                            class=\"action-button\"\n                                            (click)=\"prepKdsClickOption(dish,Kotorder)\">\n                                        <i class=\"material-icons\">check</i>\n                                    </button>\n                                    <div *ngIf=\"dish.recentDishQuantity === 0 || dish.preparedDishQuantity === dish.quantity_dish\" \n                                         class=\"completed-status\">\n                                        <i class=\"material-icons\">done</i>\n                                        <span>{{dish.preparedDishQuantity === dish.quantity_dish ? 'Prepared' : 'Delivered'}}</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-container>\n                </ng-container>\n            </div>\n\n            <!-- Order Footer -->\n            <div class=\"order-footer\">\n                <div class=\"complete-all\" *ngIf=\"selectedKdsType==='expo' || selectedKdsType==='kds'\">\n                    <button class=\"complete-all-button\" (click)=\"dishescompleted(Kotorder)\">\n                        <i class=\"material-icons\">playlist_add_check</i>\n                        <span>Complete All</span>\n                    </button>\n                </div>\n                <div class=\"order-number\">\n                    Order #{{Kotorder.externalOrderId}}\n                </div>\n            </div>\n        </div>\n    </ng-container>\n</div>\n\n<mdl-tooltip #tt3=\"mdlTooltip\">\n    <strong>Accept the request</strong>\n</mdl-tooltip>\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/onlineorders/onlineorders.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/onlineorders/onlineorders.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br>\r\n\r\n\r\n<div *ngIf=\"KotorderList.length == 0\" class=\"verticalhorizontal\">\r\n    <img src=\"assets/img/logo_2.png\" alt=\"centered image\" style=\"width: 400px\" />\r\n    <p><b>NO Orders</b>\r\n        <br>\r\n        <mdl-spinner [active]=\"true\"></mdl-spinner>\r\n\r\n        waiting for Online orders\r\n    </p>\r\n</div>\r\n\r\n\r\n<div class=\"mdl-grid\">\r\n    <ng-container *ngFor=\"let Kotorder of KotorderList; let i = index\">\r\n    <div class=\"mdl-cell mdl-cell--11-col mdl-cell--3-col-desktop\" *ngIf=\"Kotorder.showflag\" >\r\n       \r\n\r\n        <mdl-card *ngIf=\"Kotorder.orderStatus == 'pending'\" class=\"mdl-cell mdl-cell--12-col demo-card-square\"mdl-shadow=\"16\" style=\"margin-left: 5px\">\r\n\r\n          \r\n             \r\n            <div class=\" d-inline-flex \">\r\n                <div class=\"m-auto d-inline-flex pt-1 pb-1\">\r\n                    <div class=\"order-data-inner mr-2\">\r\n                        <span class=\"mdl-chip mdl-chip--contact\">\r\n                            <span class=\"mdl-chip__contact\">\r\n                                <i class=\"material-icons\">\r\n                                    event_seat\r\n                                </i>\r\n                            </span>\r\n                            <span class=\"mdl-chip__text\" style=\"font-size: 10px; \">Table: {{Kotorder.tableName}}</span>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"order-data-inner \">\r\n                        <span class=\"mdl-chip mdl-chip--contact\">\r\n                            <span class=\"mdl-chip__contact\">\r\n                                <i class=\"material-icons\">\r\n                                    access_time\r\n                                </i>\r\n                            </span>\r\n                            <span class=\"mdl-chip__text\"> \r\n                                {{ math.floor(((math.abs(this.myDate -  Kotorder.dateTimeForDisplay) / 1000 ) / 3600 ) % 24) }} :\r\n                                {{ math.floor(((math.abs(this.myDate -  Kotorder.dateTimeForDisplay) / 1000 ) / 60) % 60) }} :\r\n                                {{ math.floor((math.abs(this.myDate -  Kotorder.dateTimeForDisplay) / 1000 ) % 60) }}\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                </div>  \r\n            </div>\r\n\r\n\r\n            <div *ngIf=\"Kotorder.cancelDishList\">\r\n                <div *ngFor=\"let canceldish of Kotorder.cancelDishList;\">\r\n                    <p class=\"cancell\" *ngIf=\"canceldish.kdsFlag === true\">\r\n                        <b>{{canceldish.quantity_dish}} x {{canceldish.dish_name}} </b>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <mdl-card-supporting-text *ngFor=\"let dish of Kotorder.dishList;\" class=\"mdl-card-dish\">\r\n                \r\n\r\n                <ng-container *ngIf=\"selectedKdsType=='expo'\">\r\n                    <div *ngIf=\"dish.kdsFlag === true && dish.showCategoryFlag === true\">\r\n                        <div [ngClass]=\"(dish.recentDishQuantity == 0)?'my-class1':'my-class2'\">\r\n                \r\n                            <div class=\"mdl-grid text-left\">\r\n                                <div class=\"mdl-cell--2-col mdl-cell--2-col-desktop\">\r\n                \r\n                                    <div class=\"numberCircle \" *ngIf=\"dish.recentDishQuantity == 0\"> {{dish.quantity_dish}}</div>\r\n                                    <div class=\"numberCircle\" *ngIf=\"dish.recentDishQuantity !== 0\"> {{dish.recentDishQuantity}}</div>\r\n                                </div>\r\n                                <div class=\"mdl-cell--10-col mdl-cell--8-col-desktop\">\r\n                                    <div class=\"fonstyles\" title=\"{{dish.dish_name}}\" #setdish><span class=\"pl-1 mdl-color-text--red\"> X\r\n                                        </span>{{dish.dish_name}}</div>\r\n                                </div>\r\n\r\n                                <div class=\"mdl-cell--11-col mdl-cell--11-col-desktop mdl-grid\">\r\n                                    <span style=\"color: green;\">Prepared : {{dish.preparedDishQuantity}} </span> <span> / {{dish.quantity_dish}}</span> <br>\r\n                                </div>\r\n                                \r\n                                <div class=\"mdl-cell--11-col mdl-cell--11-col-desktop mdl-grid remark-box\">\r\n                                    <span *ngIf=\"(dish.remark != ' ' && dish.remark != '')\" class=\"remark\"> Rmk : {{dish.remark}}</span>\r\n                                </div>\r\n                                <div class=\"mdl-cell--12-col mdl-cell--12-col-desktop mdl-grid \">\r\n                                    <i [ngClass]=\"(dish.remark != ' ' && dish.remark != '')?'delivered-check':'normal-check'\"\r\n                                        class=\"material-icons hov \" style=\"cursor:pointer;\" title=\"Order Submit\"\r\n                                        *ngIf=\"dish.recentDishQuantity !== 0;else temp\" (click)=\"clickoptions(dish,Kotorder)\"> check\r\n                                    </i>\r\n                                    <ng-template #temp>\r\n                                        <div id=\"delivered\" class=\"\"><i class=\"material-icons delivered-check\">done</i>\r\n                                            Delivered</div>\r\n                                    </ng-template>\r\n                                    <div\r\n                                        *ngIf=\"(dish.optionName != '--' && dish.dishOptionName  != '--') && (dish.dish_name !== dish.dishOptionName)\">\r\n                                        ( {{dish.dishOptionName}} )</div>\r\n                                    <div\r\n                                        *ngIf=\"(dish.optionName != '--' && dish.dishOptionName  != '--') && (dish.dish_name === dish.dishOptionName)\">\r\n                                        ( {{dish.optionName}} )</div>\r\n                                </div>\r\n                \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n\r\n           \r\n\r\n            </mdl-card-supporting-text>\r\n\r\n\r\n            <mdl-card-actions mdl-card-border>\r\n\r\n                <div *ngIf=\"selectedKdsType==='expo' || selectedKdsType==='kds'\" class=\"d-inline-flex mdl-color-text--red pointer-cursor\">\r\n                    <i  class=\"material-icons\" style=\"cursor:pointer;margin-left: 15px\" title=\"Order All Submit\" (click)=\"dishescompleted(Kotorder)\" > playlist_add_check </i>\r\n                    <span style=\"padding-top:5px\">Complete All</span>\r\n                </div>      \r\n                <hr align=\"center\" width=\"50%\" style=\"margin-left:75px;background: rgb(243, 70, 7);\">\r\n\r\n                Order Number : <strong class=\"mdl-color-text--red\"> {{Kotorder.externalOrderId}}</strong><br>\r\n\r\n            </mdl-card-actions>\r\n\r\n\r\n        </mdl-card>\r\n\r\n    </div>\r\n    </ng-container>\r\n</div> \r\n\r\n\r\n\r\n<mdl-tooltip #tt3=\"mdlTooltip\">\r\n    <strong>Accept the request</strong>\r\n</mdl-tooltip>\r\n\r\n<!-- <mdl-tooltip #tt4=\"mdlTooltip\">\r\n    Complete All the Order if <strong>FOOD IS READY</strong>\r\n</mdl-tooltip>  -->\r\n \r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _kdscocketclient_kdscocketclient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kdscocketclient/kdscocketclient.component */ "./src/app/kdscocketclient/kdscocketclient.component.ts");




var routes = [
    { path: '', component: _kdscocketclient_kdscocketclient_component__WEBPACK_IMPORTED_MODULE_3__["KdscocketclientComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'kdssocket';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.SoketIpDialogshow();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_mdl_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-mdl/core */ "./node_modules/@angular-mdl/core/fesm5/angular-mdl-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _kdscocketclient_kdscocketclient_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kdscocketclient/kdscocketclient.component */ "./src/app/kdscocketclient/kdscocketclient.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _onlineorders_onlineorders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./onlineorders/onlineorders.component */ "./src/app/onlineorders/onlineorders.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _kdscocketclient_kdscocketclient_component__WEBPACK_IMPORTED_MODULE_9__["KdscocketclientComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _onlineorders_onlineorders_component__WEBPACK_IMPORTED_MODULE_11__["OnlineordersComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_mdl_core__WEBPACK_IMPORTED_MODULE_7__["MdlModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: #ffffff;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  height: 64px;\n}\n\n.header-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 100%;\n  padding: 0 24px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n.logo-section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 16px;\n}\n\n.logo {\n  font-size: 24px;\n  font-weight: 600;\n  color: #f44336;\n  background: linear-gradient(45deg, #f44336, #ff5252);\n  -webkit-background-clip: text;\n}\n\n.kds-welcome {\n  font-size: 16px;\n  color: #666;\n}\n\n.nav-section {\n  display: -webkit-box;\n  display: flex;\n  gap: 12px;\n}\n\n.nav-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  background: #f5f5f5;\n  color: #666;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.nav-button:hover {\n  background: #eeeeee;\n}\n\n.nav-button.active {\n  background: #f44336;\n  color: white;\n}\n\n.nav-button i {\n  font-size: 20px;\n}\n\n.status-section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 24px;\n}\n\n.connection-status {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 8px;\n}\n\n.connection-status i {\n  font-size: 24px;\n}\n\n.connection-status i.connected {\n  color: #4caf50;\n}\n\n.connection-status i.disconnected {\n  color: #f44336;\n}\n\n.connection-status .status-text {\n  font-size: 14px;\n  color: #666;\n}\n\n.time-display {\n  text-align: right;\n}\n\n.time-display .current-time {\n  font-size: 16px;\n  font-weight: 500;\n  color: #333;\n}\n\n.time-display .socket-info, .time-display .user-info {\n  font-size: 12px;\n  color: #666;\n}\n\n.action-button, .config-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  background: #f44336;\n  color: white;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.action-button:hover, .config-button:hover {\n  background: #e53935;\n}\n\n.action-button i, .config-button i {\n  font-size: 20px;\n}\n\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: \"liga\";\n  -webkit-font-smoothing: antialiased;\n}\n\n.headerclass_rightt_rightt {\n  float: right;\n  margin-right: 10px;\n}\n\n.header h2 {\n  text-align: center;\n}\n\ndiv.logoclass {\n  float: left;\n  height: 50px;\n  line-height: 50px;\n  font-size: 20px;\n  margin: 0;\n  padding: 0;\n}\n\n#abi {\n  width: 105px;\n  /* background:rgba(255, 111, 0, 0.76); */\n  background: #f44336;\n  color: white;\n  position: relative;\n  z-index: 2;\n  border-radius: 0px 0 0 35px;\n  text-align: center;\n}\n\n#abi:after {\n  content: \"\";\n  position: absolute;\n  right: -10px;\n  top: 10px;\n  width: 0;\n  height: 0;\n  border-top: 11px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid #f44336;\n}\n\n#number {\n  margin-left: 18px;\n}\n\ndiv.time {\n  margin-right: 10px;\n  font-weight: bold;\n}\n\n.menu-item-pointsheader {\n  margin-right: 350px;\n  border-bottom: 5px solid red;\n  color: green;\n}\n\n.mdl-data-table {\n  text-align: center;\n  padding-inline: 0;\n}\n\n.mdl-data-table td {\n  padding: 7px 4px !important;\n}\n\n.mdl-data-table td {\n  padding-left: 5px;\n  text-align: center;\n}\n\n.connection-icon-size {\n  font-size: 30px;\n  margin-top: 10px;\n}\n\n.connection-icon {\n  margin-left: 5%;\n  margin-right: 10px;\n}\n\n/* Dialog Styles */\n\n.dialog-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 16px 24px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  background: linear-gradient(45deg, #f44336, #ff5252);\n  color: white;\n  border-radius: 8px 8px 0 0;\n}\n\n.dialog-title {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 500;\n  color: white;\n}\n\n.close-button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  color: white;\n  border-radius: 50%;\n  -webkit-transition: background-color 0.2s;\n  transition: background-color 0.2s;\n  opacity: 0.8;\n}\n\n.close-button:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  opacity: 1;\n}\n\n.dialog-content {\n  padding: 24px;\n  max-height: calc(100vh - 200px);\n  overflow-y: auto;\n  background: white;\n}\n\n.dialog-actions {\n  padding: 16px 24px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  gap: 8px;\n  background: #f5f5f5;\n  border-radius: 0 0 8px 8px;\n}\n\n.primary-button {\n  background: linear-gradient(45deg, #f44336, #ff5252);\n  color: white;\n  border: none;\n  padding: 8px 24px;\n  border-radius: 30px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 4px rgba(244, 67, 54, 0.2);\n}\n\n.primary-button:hover {\n  background: linear-gradient(45deg, #e53935, #ff5252);\n  box-shadow: 0 4px 8px rgba(244, 67, 54, 0.3);\n}\n\n.secondary-button {\n  background: white;\n  color: #f44336;\n  border: 1px solid #f44336;\n  padding: 8px 24px;\n  border-radius: 30px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.secondary-button:hover {\n  background: rgba(244, 67, 54, 0.04);\n}\n\n.full-width {\n  width: 100%;\n}\n\n/* Section Styles */\n\n.section {\n  margin-bottom: 24px;\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.section:last-child {\n  margin-bottom: 0;\n}\n\n.section-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 16px;\n}\n\n.section h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 500;\n  color: #333;\n}\n\n/* Radio and Checkbox Styles */\n\n.radio-group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  gap: 12px;\n}\n\n.radio-label {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 8px;\n  border-radius: 4px;\n  -webkit-transition: background-color 0.2s;\n  transition: background-color 0.2s;\n}\n\n.radio-label:hover {\n  background-color: #f5f5f5;\n}\n\n.radio-label input[type=radio] {\n  margin: 0;\n  accent-color: #f44336;\n}\n\n.categories-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  gap: 8px;\n  max-height: 150px;\n  overflow-y: auto;\n  padding-right: 8px;\n}\n\n.category-item {\n  padding: 8px;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  border: 1px solid transparent;\n}\n\n.category-item:hover {\n  background-color: #f5f5f5;\n  border-color: #e0e0e0;\n}\n\n.checkbox-label {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n\n.checkbox-label input[type=checkbox] {\n  margin: 0;\n  accent-color: #f44336;\n}\n\n/* Scrollbar Styles */\n\n.categories-list::-webkit-scrollbar {\n  width: 8px;\n}\n\n.categories-list::-webkit-scrollbar-track {\n  background: #f5f5f5;\n  border-radius: 4px;\n}\n\n.categories-list::-webkit-scrollbar-thumb {\n  background: #e0e0e0;\n  border-radius: 4px;\n}\n\n.categories-list::-webkit-scrollbar-thumb:hover {\n  background: #bdbdbd;\n}\n\n/* MDL Dialog Overrides */\n\n.mdl-dialog {\n  border-radius: 8px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.mdl-textfield {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n.mdl-textfield__input {\n  border-color: #e0e0e0;\n}\n\n.mdl-textfield__input:focus {\n  border-color: #f44336;\n}\n\n.mdl-textfield__label {\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxQcm9qZWN0c1xcRGlnaXJlc3Ryb1xcZGlnaXJlc3Ryby1rZHMvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFNBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvREFBQTtFQUNBLDZCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0FGOztBRElBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsU0FBQTtBQ0RGOztBRElBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDREY7O0FER0U7RUFDRSxtQkFBQTtBQ0RKOztBRElFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDRko7O0FES0U7RUFDRSxlQUFBO0FDSEo7O0FEUUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsU0FBQTtBQ0xGOztBRFFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFFBQUE7QUNMRjs7QURPRTtFQUNFLGVBQUE7QUNMSjs7QURPSTtFQUNFLGNBQUE7QUNMTjs7QURRSTtFQUNFLGNBQUE7QUNOTjs7QURVRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDUko7O0FEWUE7RUFDRSxpQkFBQTtBQ1RGOztBRFdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1RKOztBRFlFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNWSjs7QURlQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtBQ1pGOztBRGNFO0VBQ0UsbUJBQUE7QUNaSjs7QURlRTtFQUNFLGVBQUE7QUNiSjs7QURrQkE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtBQ2ZGOztBRGtCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ2ZGOztBRGtCQTtFQUNFLGtCQUFBO0FDZkY7O0FEa0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2ZGOztBRGtCQTtFQUNFLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQkFBQTtBQ2hCRjs7QURtQkE7RUFDRSxpQkFBQTtBQ2hCRjs7QURtQkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDaEJGOztBRG1CQTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDaEJGOztBRG9CQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsMkJBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ2pCRjs7QURvQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNqQkY7O0FEb0JBO0VBRUUsZUFBQTtFQUNBLGtCQUFBO0FDbEJGOztBRHFCQSxrQkFBQTs7QUFDQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG9EQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDbEJGOztBRHFCQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDbEJGOztBRHFCQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtFQUNBLFlBQUE7QUNsQkY7O0FEb0JFO0VBQ0UsMENBQUE7RUFDQSxVQUFBO0FDbEJKOztBRHNCQTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNuQkY7O0FEc0JBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNuQkY7O0FEc0JBO0VBQ0Usb0RBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtFQUNBLDRDQUFBO0FDbkJGOztBRHFCRTtFQUNFLG9EQUFBO0VBQ0EsNENBQUE7QUNuQko7O0FEdUJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7QUNwQkY7O0FEc0JFO0VBQ0UsbUNBQUE7QUNwQko7O0FEd0JBO0VBQ0UsV0FBQTtBQ3JCRjs7QUR3QkEsbUJBQUE7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7QUNyQkY7O0FEdUJFO0VBQ0UsZ0JBQUE7QUNyQko7O0FEeUJBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ3RCRjs7QUR5QkEsOEJBQUE7O0FBQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxTQUFBO0FDdEJGOztBRHlCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7QUN0QkY7O0FEd0JFO0VBQ0UseUJBQUE7QUN0Qko7O0FEeUJFO0VBQ0UsU0FBQTtFQUNBLHFCQUFBO0FDdkJKOztBRDJCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUN4QkY7O0FEMkJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtFQUNBLDZCQUFBO0FDeEJGOztBRDBCRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUN4Qko7O0FENEJBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDekJGOztBRDJCRTtFQUNFLFNBQUE7RUFDQSxxQkFBQTtBQ3pCSjs7QUQ2QkEscUJBQUE7O0FBQ0E7RUFDRSxVQUFBO0FDMUJGOztBRDZCQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUMxQkY7O0FENkJBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQzFCRjs7QUQ0QkU7RUFDRSxtQkFBQTtBQzFCSjs7QUQ4QkEseUJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7QUMzQkY7O0FEOEJBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDM0JGOztBRDZCRTtFQUNFLHFCQUFBO0FDM0JKOztBRDZCSTtFQUNFLHFCQUFBO0FDM0JOOztBRCtCRTtFQUNFLFdBQUE7QUM3QkoiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGhlaWdodDogNjRweDtcclxufVxyXG5cclxuLmhlYWRlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMjRweDtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLy8gTG9nbyBTZWN0aW9uXHJcbi5sb2dvLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogI2Y0NDMzNjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmNDQzMzYsICNmZjUyNTIpO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG59XHJcblxyXG4ua2RzLXdlbGNvbWUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLy8gTmF2aWdhdGlvbiBTZWN0aW9uXHJcbi5uYXYtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcbiAgfVxyXG5cclxuICAmLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTdGF0dXMgU2VjdGlvblxyXG4uc3RhdHVzLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDI0cHg7XHJcbn1cclxuXHJcbi5jb25uZWN0aW9uLXN0YXR1cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIFxyXG4gICAgJi5jb25uZWN0ZWQge1xyXG4gICAgICBjb2xvcjogIzRjYWY1MDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5kaXNjb25uZWN0ZWQge1xyXG4gICAgICBjb2xvcjogI2Y0NDMzNjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdGF0dXMtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICB9XHJcbn1cclxuXHJcbi50aW1lLWRpc3BsYXkge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxuICAuY3VycmVudC10aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcblxyXG4gIC5zb2NrZXQtaW5mbywgLnVzZXItaW5mbyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFjdGlvbiBCdXR0b25zXHJcbi5hY3Rpb24tYnV0dG9uLCAuY29uZmlnLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U1MzkzNTtcclxuICB9XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWF0ZXJpYWwgSWNvbnNcclxuLm1hdGVyaWFsLWljb25zIHtcclxuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3b3JkLXdyYXA6IG5vcm1hbDtcclxuICBkaXJlY3Rpb246IGx0cjtcclxuICAtd2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG4uaGVhZGVyY2xhc3NfcmlnaHR0X3JpZ2h0dCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmhlYWRlciBoMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5kaXYubG9nb2NsYXNzIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jYWJpIHtcclxuICB3aWR0aDogMTA1cHg7XHJcbiAgLyogYmFja2dyb3VuZDpyZ2JhKDI1NSwgMTExLCAwLCAwLjc2KTsgKi9cclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ0LCA2NywgNTQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDAgMCAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2FiaTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC0xMHB4O1xyXG4gIHRvcDogMTBweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXRvcDogMTFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJnYigyNDQsIDY3LCA1NCk7XHJcbn1cclxuXHJcbiNudW1iZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG59XHJcblxyXG5kaXYudGltZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubWVudS1pdGVtLXBvaW50c2hlYWRlciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzNTBweDtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmVkO1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuXHJcbi5tZGwtZGF0YS10YWJsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctaW5saW5lOiAwO1xyXG59XHJcblxyXG4ubWRsLWRhdGEtdGFibGUgdGQge1xyXG4gIHBhZGRpbmc6IDdweCA0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1kbC1kYXRhLXRhYmxlIHRkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb25uZWN0aW9uLWljb24tc2l6ZXtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNvbm5lY3Rpb24taWNvblxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLyogRGlhbG9nIFN0eWxlcyAqL1xyXG4uZGlhbG9nLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjQ0MzM2LCAjZmY1MjUyKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XHJcbn1cclxuXHJcbi5kaWFsb2ctdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jbG9zZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XHJcbiAgb3BhY2l0eTogMC44O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlhbG9nLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uZGlhbG9nLWFjdGlvbnMge1xyXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcclxufVxyXG5cclxuLnByaW1hcnktYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmNDQzMzYsICNmZjUyNTIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogOHB4IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgyNDQsIDY3LCA1NCwgMC4yKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNlNTM5MzUsICNmZjUyNTIpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMjQ0LCA2NywgNTQsIDAuMyk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2Vjb25kYXJ5LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6ICNmNDQzMzY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y0NDMzNjtcclxuICBwYWRkaW5nOiA4cHggMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCA2NywgNTQsIDAuMDQpO1xyXG4gIH1cclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBTZWN0aW9uIFN0eWxlcyAqL1xyXG4uc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uc2VjdGlvbiBoMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4vKiBSYWRpbyBhbmQgQ2hlY2tib3ggU3R5bGVzICovXHJcbi5yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLnJhZGlvLWxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYWNjZW50LWNvbG9yOiAjZjQ0MzM2O1xyXG4gIH1cclxufVxyXG5cclxuLmNhdGVnb3JpZXMtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogOHB4O1xyXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcnktaXRlbSB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBib3JkZXItY29sb3I6ICNlMGUwZTA7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hlY2tib3gtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBhY2NlbnQtY29sb3I6ICNmNDQzMzY7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTY3JvbGxiYXIgU3R5bGVzICovXHJcbi5jYXRlZ29yaWVzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcmllcy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xyXG4gIH1cclxufVxyXG5cclxuLyogTURMIERpYWxvZyBPdmVycmlkZXMgKi9cclxuLm1kbC1kaWFsb2cge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWRsLXRleHRmaWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgJl9faW5wdXQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbGFiZWwge1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG59ICIsIi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5sb2dvLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG59XG5cbi5sb2dvIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2Y0NDMzNjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjQ0MzM2LCAjZmY1MjUyKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG59XG5cbi5rZHMtd2VsY29tZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5uYXYtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbn1cblxuLm5hdi1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4ubmF2LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG59XG4ubmF2LWJ1dHRvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmF2LWJ1dHRvbiBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc3RhdHVzLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI0cHg7XG59XG5cbi5jb25uZWN0aW9uLXN0YXR1cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuLmNvbm5lY3Rpb24tc3RhdHVzIGkge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uY29ubmVjdGlvbi1zdGF0dXMgaS5jb25uZWN0ZWQge1xuICBjb2xvcjogIzRjYWY1MDtcbn1cbi5jb25uZWN0aW9uLXN0YXR1cyBpLmRpc2Nvbm5lY3RlZCB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLmNvbm5lY3Rpb24tc3RhdHVzIC5zdGF0dXMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi50aW1lLWRpc3BsYXkge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi50aW1lLWRpc3BsYXkgLmN1cnJlbnQtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7XG59XG4udGltZS1kaXNwbGF5IC5zb2NrZXQtaW5mbywgLnRpbWUtZGlzcGxheSAudXNlci1pbmZvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmFjdGlvbi1idXR0b24sIC5jb25maWctYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cbi5hY3Rpb24tYnV0dG9uOmhvdmVyLCAuY29uZmlnLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlNTM5MzU7XG59XG4uYWN0aW9uLWJ1dHRvbiBpLCAuY29uZmlnLWJ1dHRvbiBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBkaXJlY3Rpb246IGx0cjtcbiAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6IFwibGlnYVwiO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLmhlYWRlcmNsYXNzX3JpZ2h0dF9yaWdodHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmhlYWRlciBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZGl2LmxvZ29jbGFzcyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuI2FiaSB7XG4gIHdpZHRoOiAxMDVweDtcbiAgLyogYmFja2dyb3VuZDpyZ2JhKDI1NSwgMTExLCAwLCAwLjc2KTsgKi9cbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwIDAgMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYWJpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTEwcHg7XG4gIHRvcDogMTBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMTFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2Y0NDMzNjtcbn1cblxuI251bWJlciB7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xufVxuXG5kaXYudGltZSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tZW51LWl0ZW0tcG9pbnRzaGVhZGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAzNTBweDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJlZDtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ubWRsLWRhdGEtdGFibGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctaW5saW5lOiAwO1xufVxuXG4ubWRsLWRhdGEtdGFibGUgdGQge1xuICBwYWRkaW5nOiA3cHggNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tZGwtZGF0YS10YWJsZSB0ZCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb25uZWN0aW9uLWljb24tc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNvbm5lY3Rpb24taWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4vKiBEaWFsb2cgU3R5bGVzICovXG4uZGlhbG9nLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjQ0MzM2LCAjZmY1MjUyKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbn1cblxuLmRpYWxvZy10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICBvcGFjaXR5OiAwLjg7XG59XG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZGlhbG9nLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmRpYWxvZy1hY3Rpb25zIHtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDhweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG59XG5cbi5wcmltYXJ5LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2Y0NDMzNiwgI2ZmNTI1Mik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDI0NCwgNjcsIDU0LCAwLjIpO1xufVxuLnByaW1hcnktYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZTUzOTM1LCAjZmY1MjUyKTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMjQ0LCA2NywgNTQsIDAuMyk7XG59XG5cbi5zZWNvbmRhcnktYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiAjZjQ0MzM2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjQ0MzM2O1xuICBwYWRkaW5nOiA4cHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4uc2Vjb25kYXJ5LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCA2NywgNTQsIDAuMDQpO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBTZWN0aW9uIFN0eWxlcyAqL1xuLnNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLnNlY3Rpb246bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnNlY3Rpb24gaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi8qIFJhZGlvIGFuZCBDaGVja2JveCBTdHlsZXMgKi9cbi5yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cblxuLnJhZGlvLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cbi5yYWRpby1sYWJlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4ucmFkaW8tbGFiZWwgaW5wdXRbdHlwZT1yYWRpb10ge1xuICBtYXJnaW46IDA7XG4gIGFjY2VudC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLmNhdGVnb3JpZXMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4uY2F0ZWdvcnktaXRlbSB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5jYXRlZ29yeS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xufVxuXG4uY2hlY2tib3gtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNoZWNrYm94LWxhYmVsIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgbWFyZ2luOiAwO1xuICBhY2NlbnQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi8qIFNjcm9sbGJhciBTdHlsZXMgKi9cbi5jYXRlZ29yaWVzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cblxuLmNhdGVnb3JpZXMtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jYXRlZ29yaWVzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmNhdGVnb3JpZXMtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xufVxuXG4vKiBNREwgRGlhbG9nIE92ZXJyaWRlcyAqL1xuLm1kbC1kaWFsb2cge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWRsLXRleHRmaWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLm1kbC10ZXh0ZmllbGRfX2lucHV0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xufVxuLm1kbC10ZXh0ZmllbGRfX2lucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2O1xufVxuLm1kbC10ZXh0ZmllbGRfX2xhYmVsIHtcbiAgY29sb3I6ICM2NjY7XG59Il19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_socketconfig_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/socketconfig.service */ "./src/app/service/socketconfig.service.ts");
/* harmony import */ var _angular_mdl_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-mdl/core */ "./node_modules/@angular-mdl/core/fesm5/angular-mdl-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(SocketconfigService, mdlSnackbarService) {
        // let ipAddress = SocketconfigService.getIpaddress();
        // console.log("SocketconfigService.getIpaddress()", ipAddress);
        // let socketServerUrl = `http://${ipAddress}:7000`;
        // this.socket = io(socketServerUrl);
        this.SocketconfigService = SocketconfigService;
        this.mdlSnackbarService = mdlSnackbarService;
        this.soketIpValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.usernameValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.passwordValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.selectedCategoriesList = [];
        this.kdsTypes = [
            { name: "Expeditor KDS (Expo)", value: "expo" },
            { name: "Preparation KDS (Prep)", value: "prep" },
            { name: "KDS", value: "kds" }
        ];
        this.selectedKdsType = localStorage.getItem('selectedKdsType') != null ? localStorage.getItem('selectedKdsType') : '';
        this.flag = 0;
        this.activeOrderTab = 'restaurant';
        this.isLoggedIn = false;
        this.socket = SocketconfigService.getSocketConnection();
        this.socket.off("get-Categories");
    }
    HeaderComponent.prototype.switchOrderTab = function () {
        this.activeOrderTab = this.activeOrderTab === 'restaurant' ? 'online' : 'restaurant';
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.myDate = new Date();
        }, 1000);
        if (localStorage.getItem('ipAddress') != null) {
            this.address = localStorage.getItem('ipAddress');
            this.flag = 1;
        }
        console.log("this.flag status", this.flag);
    };
    /** Soket Ip*/
    HeaderComponent.prototype.SoketIpDialogShow = function (dialogRef) {
    };
    HeaderComponent.prototype.SoketIpDialogHide = function () {
    };
    HeaderComponent.prototype.SoketIpDialogshow = function () {
        this.SoketIpDialog.show();
    };
    HeaderComponent.prototype.changeSocketIp = function () {
        if (this.soketIpValue.value != null && this.soketIpValue.value != '') {
            this.SocketconfigService.selectipaddress(this.soketIpValue.value);
            this.flag = 1;
        }
        else {
            this.showSnackbar();
        }
        this.SoketIpDialog.close();
        this.ngOnInit();
    };
    HeaderComponent.prototype.showSnackbar = function () {
        this.mdlSnackbarService.showSnackbar({
            message: 'IP Address field should not be Empty OR  Please enter correct IP Address ',
            action: {
                handler: function () {
                    // this.mdlSnackbarService.showToast('You hit the ok Button');
                },
                text: 'OK'
            }
        });
    };
    /** Map Categorys */
    HeaderComponent.prototype.MapCategoriesDialogShow = function (dialogRef) {
    };
    HeaderComponent.prototype.MapCategoriesDialogHide = function () {
        this.selectedKdsType = localStorage.getItem('selectedKdsType') != null ? localStorage.getItem('selectedKdsType') : '';
    };
    HeaderComponent.prototype.MapCategoriesDialogshow = function () {
        this.getCategoriesResponse();
        this.MapCategoriesDialog.show();
    };
    HeaderComponent.prototype.getCategoriesResponse = function () {
        var _this = this;
        this.socket.emit("get-categories");
        this.selectedKdsType = localStorage.getItem('selectedKdsType') != null ? localStorage.getItem('selectedKdsType') : '';
        this.selectedCategoriesList = localStorage.getItem('selectedCategoriesList') != null ? JSON.parse(localStorage.getItem('selectedCategoriesList')) : [];
        this.socket.on("get-categories-response", function (resposedata) {
            _this.categoriesList = [];
            if (resposedata.length != 0) {
                resposedata.forEach(function (category) {
                    if (_this.selectedCategoriesList.some(function (item) { return item === category.menu_id; })) {
                        category.showCategoryFlag = true;
                    }
                    else {
                        category.showCategoryFlag = false;
                    }
                });
                _this.categoriesList = resposedata;
            }
        });
        console.log(this.categoriesList);
    };
    HeaderComponent.prototype.saveCategoriesToKDS = function () {
        var _this = this;
        console.log(this.categoriesList);
        this.selectedCategoriesList = [];
        if (this.categoriesList) {
            this.categoriesList.forEach(function (category) {
                if (category.showCategoryFlag === true) {
                    _this.selectedCategoriesList.push(category.menu_id);
                }
            });
        }
        localStorage.removeItem('selectedKdsType');
        localStorage.setItem('selectedKdsType', this.selectedKdsType);
        localStorage.removeItem('selectedCategoriesList');
        localStorage.setItem('selectedCategoriesList', JSON.stringify(this.selectedCategoriesList));
        localStorage.removeItem('categoriesList');
        localStorage.setItem('categoriesList', JSON.stringify(this.categoriesList));
        this.mdlSnackbarService.showSnackbar({
            message: "KDS Configuration Updated!"
        });
        this.MapCategoriesDialog.close();
    };
    HeaderComponent.prototype.changeKDSType = function (event) {
        this.selectedKdsType = event.target.value;
        console.log(event.target.value);
    };
    HeaderComponent.prototype.selectAllCategories = function () {
        this.categoriesList.forEach(function (category) {
            category.showCategoryFlag = true;
        });
    };
    /** Login Dialog */
    HeaderComponent.prototype.LoginDialogShow = function (dialogRef) {
    };
    HeaderComponent.prototype.LoginDialogHide = function () {
        this.usernameValue.reset();
        this.passwordValue.reset();
    };
    HeaderComponent.prototype.LoginDialogshow = function () {
        this.LoginDialog.show();
    };
    HeaderComponent.prototype.handleLogin = function () {
        if (this.usernameValue.value && this.passwordValue.value) {
            // TODO: Implement actual login logic here
            this.isLoggedIn = true;
            this.LoginDialog.close();
            this.mdlSnackbarService.showSnackbar({
                message: 'Login successful!'
            });
        }
        else {
            this.mdlSnackbarService.showSnackbar({
                message: 'Please enter both username and password',
            });
        }
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _service_socketconfig_service__WEBPACK_IMPORTED_MODULE_2__["SocketconfigService"] },
        { type: _angular_mdl_core__WEBPACK_IMPORTED_MODULE_3__["MdlSnackbarService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SoketIpDialog', { static: true })
    ], HeaderComponent.prototype, "SoketIpDialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('MapCategoriesDialog', { static: true })
    ], HeaderComponent.prototype, "MapCategoriesDialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('LoginDialog', { static: true })
    ], HeaderComponent.prototype, "LoginDialog", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/kdscocketclient/kdscocketclient.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/kdscocketclient/kdscocketclient.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**scss for kds client page...*/\n.mdl-grid {\n  padding: 0 !important;\n  z-index: 1;\n}\n.mdl-cell {\n  padding: 25px 0;\n  text-align: center;\n  color: #424242;\n  font-weight: bold;\n}\n.mdl-card {\n  border-bottom: 1px solid red;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.mdl-card__actions {\n  height: auto;\n  font-size: 12px;\n}\n.remark-box ::before {\n  content: \"•\";\n  font-size: 25px;\n  display: inline-block;\n  position: relative;\n  top: auto;\n  left: 216px;\n  bottom: 21px;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.remark {\n  color: #d53232;\n  font-weight: bold;\n  display: inline;\n  line-height: 18px;\n}\n.remark-delivered {\n  color: #242424;\n  font-weight: bold;\n  display: inline;\n  line-height: 18px;\n}\n.normal-check {\n  position: relative;\n  bottom: 28px;\n  left: 236px;\n}\n.rmk-check {\n  position: relative;\n  bottom: 48px;\n  left: 236px;\n}\n.delivered-check {\n  position: absolute;\n  top: 20px;\n  left: 262px;\n}\n.mdl-card-dish {\n  position: relative;\n  margin-top: -20px;\n  line-height: 30px;\n}\n.cancell {\n  text-decoration: line-through;\n  -webkit-text-decoration-color: #f02805;\n          text-decoration-color: #f02805;\n  color: red;\n}\n.my-class1 {\n  text-decoration: line-through;\n  color: white;\n  -webkit-text-decoration-color: #ff3131;\n          text-decoration-color: #ff3131;\n  background: #ffebeb;\n  border-radius: 10px;\n  color: black;\n  font-weight: bold;\n  top: 0;\n}\n.my-class1 .remark {\n  color: #395870;\n}\n.my-class3 {\n  text-decoration: none;\n}\n.my-class2 {\n  display: initial;\n  color: black;\n  font-weight: bold;\n}\nmdl-chip {\n  width: 150px !important;\n  color: black;\n}\nmdl-chip-contact {\n  float: left;\n}\n.mdl-chip {\n  height: 32px;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  line-height: 35px;\n  padding: 0 12px;\n  border: 0;\n  border-radius: 16px;\n  background-color: white;\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.87);\n  margin: 2px 0;\n  font-size: 0;\n  white-space: nowrap;\n}\n.mdl-chip {\n  height: 36px;\n  background-color: none;\n  border: 1px solid #ffc7c7;\n  border-bottom: 1px solid #ffc7c7 !important;\n}\n.mdl-chip__contact {\n  height: 32px;\n  width: 32px;\n  border-radius: 0px;\n  margin-right: 8px;\n  font-size: 16px;\n  line-height: 45px;\n  color: #ff2b2b;\n  border-right: 1px solid #ff2323;\n  /* opacity: 0.8; */\n}\ndiv.blue {\n  float: right;\n  height: 35px;\n  line-height: 50px;\n  font-size: 15px;\n  margin: 0;\n  padding: 0;\n  left: 48px;\n  top: -30px;\n  width: 170px;\n}\n#abi1 {\n  width: 245px;\n  padding: 1px 0 1px 0px;\n  background: #f44336;\n  color: #fff;\n  word-wrap: break-word;\n  position: relative;\n  z-index: 2;\n  font-size: 20px;\n}\n#abi1:after {\n  content: \"\";\n  position: absolute;\n  left: -10px;\n  top: 0px;\n  width: 0;\n  height: 0;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid #395870;\n}\n.numberCircle {\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 15px;\n  display: inline-box;\n  border: 2px solid #395870;\n  margin-bottom: -30px;\n}\n.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.hov:hover {\n  border-radius: 50%;\n  border: 1px solid;\n  padding: 2px;\n  font-size: 21px;\n  font-style: normal;\n  background: none;\n  text-align: center;\n  color: #107d13;\n  font-weight: bold;\n}\n.verticalhorizontal {\n  height: 300px;\n  text-align: center;\n  width: 300px;\n  vertical-align: middle;\n  margin: 10% 0 0 40%;\n}\n.singlebutton {\n  color: white !important;\n  font: bold;\n  background: black !important;\n}\n.singlebutton:hover {\n  border-bottom: 2px solid red;\n}\n.mdl-chip {\n  border-bottom: 2px solid red;\n}\n#delivered {\n  color: #395870;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n#setdish {\n  margin-right: 50px;\n}\n.tableback {\n  background: repeating-linear-gradient(45deg, slategrey, transparent 100px);\n}\n.allcomplted:hover {\n  border-bottom: 2px solid red;\n}\n.empty-state {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  min-height: 80vh;\n  text-align: center;\n  padding: 2rem;\n}\n.empty-state .empty-state-logo {\n  width: 300px;\n  margin-bottom: 2rem;\n}\n.empty-state .empty-state-content h2 {\n  font-size: 24px;\n  color: #333;\n  margin-bottom: 1rem;\n}\n.empty-state .empty-state-content p {\n  color: #666;\n  font-size: 16px;\n}\n.empty-state .loading-spinner {\n  margin: 1rem 0;\n}\n.orders-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n  padding: 4rem;\n  -webkit-box-align: start;\n          align-items: start;\n}\n.order-card {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease;\n}\n.order-card:hover {\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px);\n}\n.order-header {\n  background: #f5f5f5;\n  padding: 1rem;\n  border-bottom: 1px solid #eee;\n}\n.order-header .order-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 1rem;\n}\n.order-header .order-info .table-info, .order-header .order-info .time-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 0.5rem;\n  color: #666;\n  font-size: 14px;\n}\n.order-header .order-info .table-info i, .order-header .order-info .time-info i {\n  color: #f44336;\n}\n.cancelled-items {\n  padding: 0.5rem 1rem;\n  background: #fff5f5;\n}\n.cancelled-items .cancelled-item {\n  color: #f44336;\n  text-decoration: line-through;\n  font-size: 14px;\n  margin: 0.25rem 0;\n}\n.order-items {\n  padding: 1rem;\n}\n.order-item {\n  background: white;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n.order-item.completed {\n  background: #f8f9fa;\n  opacity: 0.7;\n}\n.order-item.prepared {\n  background: #e8f5e9;\n}\n.order-item .item-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  gap: 1rem;\n  padding: 1rem;\n}\n.order-item .quantity-circle {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #f44336;\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-weight: 500;\n  flex-shrink: 0;\n}\n.order-item .item-details {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.order-item .item-details .item-name {\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 0.25rem;\n}\n.order-item .item-details .item-name .item-multiplier {\n  color: #f44336;\n  margin-right: 0.25rem;\n}\n.order-item .item-details .preparation-status {\n  font-size: 14px;\n  color: #666;\n  margin: 0.25rem 0;\n}\n.order-item .item-details .preparation-status .prepared {\n  color: #4caf50;\n}\n.order-item .item-details .item-remarks {\n  font-size: 14px;\n  color: #666;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 0.25rem;\n  margin: 0.25rem 0;\n}\n.order-item .item-details .item-remarks i {\n  font-size: 16px;\n  color: #f44336;\n}\n.order-item .item-details .item-options {\n  font-size: 14px;\n  color: #666;\n  font-style: italic;\n}\n.order-item .item-actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 0.5rem;\n}\n.order-item .item-actions .action-button {\n  background: none;\n  border: none;\n  color: #4caf50;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 50%;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n.order-item .item-actions .action-button:hover {\n  background: #e8f5e9;\n}\n.order-item .item-actions .action-button i {\n  font-size: 20px;\n}\n.order-item .item-actions .completed-status {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 0.25rem;\n  color: #4caf50;\n  font-size: 14px;\n}\n.order-item .item-actions .completed-status i {\n  font-size: 20px;\n}\n.order-footer {\n  padding: 1rem;\n  border-top: 1px solid #eee;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.order-footer .complete-all-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  gap: 0.5rem;\n  background: #f44336;\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n.order-footer .complete-all-button:hover {\n  background: #e53935;\n}\n.order-footer .complete-all-button i {\n  font-size: 20px;\n}\n.order-footer .order-number {\n  color: #666;\n  font-size: 14px;\n}\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: \"liga\";\n  -webkit-font-smoothing: antialiased;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2RzY29ja2V0Y2xpZW50L2tkc2NvY2tldGNsaWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAva2RzY29ja2V0Y2xpZW50L0M6XFxQcm9qZWN0c1xcRGlnaXJlc3Ryb1xcZGlnaXJlc3Ryby1rZHMvc3JjXFxhcHBcXGtkc2NvY2tldGNsaWVudFxca2RzY29ja2V0Y2xpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQiwrQkFBQTtBQUNBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FERUY7QUNDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBREVGO0FDQ0E7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QURFRjtBQ0FFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QURFSjtBQ0VBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtBRENGO0FDQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURFRjtBQ0FBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FER0Y7QUNEQTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURHRjtBQ0FBO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBREVGO0FDQUE7RUFFRSxrQkFBQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FERUo7QUNDQTtFQUVFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRENGO0FDRUE7RUFDRSw2QkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxVQUFBO0FEQ0Y7QUNJQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsTUFBQTtBRERGO0FDR0U7RUFDRSxjQUFBO0FEREo7QUNLQTtFQUNFLHFCQUFBO0FERkY7QUNLQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FERkY7QUNLQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBREZGO0FDR0U7RUFDRSxXQUFBO0FEREo7QUNLQTtFQUNFLFlBQUE7RUFDQSx1REFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURGRjtBQ01BO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtBREhGO0FDS0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBREZGO0FDTUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FESEY7QUNNQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsZUFBQTtBRE5GO0FDUUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEscUNBQUE7RUFDQSxnQ0FBQTtBRE5GO0FDU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QURQRjtBQ1VBO0VBRUUsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FEUkY7QUNXQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRFJGO0FDV0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRFJGO0FDWUE7RUFFRSx1QkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBRFZGO0FDWUU7RUFDRSw0QkFBQTtBRFZKO0FDZUE7RUFDRSw0QkFBQTtBRFpGO0FDaUJBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0FEZEE7QUNpQkE7RUFDRSxrQkFBQTtBRGRGO0FDZ0JBO0VBQ0UsMEVBQUE7QURiRjtBQ2tCRTtFQUNFLDRCQUFBO0FEZko7QUNxQkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FEbEJGO0FDb0JFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FEbEJKO0FDc0JJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBRHBCTjtBQ3VCSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FEckJOO0FDeUJFO0VBQ0UsY0FBQTtBRHZCSjtBQzRCQTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSxrQkFBQTtBRHpCRjtBQzZCQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFBQSx1Q0FBQTtFQUFBLCtCQUFBO0VBQUEsNERBQUE7QUQxQkY7QUM0QkU7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0FEMUJKO0FDK0JBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUQ1QkY7QUM4QkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFNBQUE7QUQ1Qko7QUM4Qkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FENUJOO0FDOEJNO0VBQ0UsY0FBQTtBRDVCUjtBQ21DQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QURoQ0Y7QUNrQ0U7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURoQ0o7QUNxQ0E7RUFDRSxhQUFBO0FEbENGO0FDcUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtBRGxDRjtBQ29DRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBRGxDSjtBQ3FDRTtFQUNFLG1CQUFBO0FEbkNKO0FDc0NFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FEcENKO0FDdUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEckNKO0FDd0NFO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0FEdENKO0FDd0NJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUR0Q047QUN3Q007RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUR0Q1I7QUMwQ0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEeENOO0FDMENNO0VBQ0UsY0FBQTtBRHhDUjtBQzRDSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRDFDTjtBQzRDTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FEMUNSO0FDOENJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRDVDTjtBQ2dERTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0FEOUNKO0FDZ0RJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FEOUNOO0FDZ0RNO0VBQ0UsbUJBQUE7QUQ5Q1I7QUNpRE07RUFDRSxlQUFBO0FEL0NSO0FDbURJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRGpETjtBQ21ETTtFQUNFLGVBQUE7QURqRFI7QUN3REE7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRHJERjtBQ3VERTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtBRHJESjtBQ3VESTtFQUNFLG1CQUFBO0FEckROO0FDd0RJO0VBQ0UsZUFBQTtBRHRETjtBQzBERTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FEeERKO0FDNkRBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7QUQxREYiLCJmaWxlIjoic3JjL2FwcC9rZHNjb2NrZXRjbGllbnQva2RzY29ja2V0Y2xpZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqc2NzcyBmb3Iga2RzIGNsaWVudCBwYWdlLi4uKi9cbi5tZGwtZ3JpZCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTtcbn1cblxuLm1kbC1jZWxsIHtcbiAgcGFkZGluZzogMjVweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDI0MjQyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1kbC1jYXJkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1kbC1jYXJkX19hY3Rpb25zIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yZW1hcmstYm94IDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKJcIjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiBhdXRvO1xuICBsZWZ0OiAyMTZweDtcbiAgYm90dG9tOiAyMXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4ucmVtYXJrIHtcbiAgY29sb3I6ICNkNTMyMzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ucmVtYXJrLWRlbGl2ZXJlZCB7XG4gIGNvbG9yOiAjMjQyNDI0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLm5vcm1hbC1jaGVjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAyOHB4O1xuICBsZWZ0OiAyMzZweDtcbn1cblxuLnJtay1jaGVjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA0OHB4O1xuICBsZWZ0OiAyMzZweDtcbn1cblxuLmRlbGl2ZXJlZC1jaGVjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAyNjJweDtcbn1cblxuLm1kbC1jYXJkLWRpc2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLmNhbmNlbGwge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZjAyODA1O1xuICBjb2xvcjogcmVkO1xufVxuXG4ubXktY2xhc3MxIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMTMxO1xuICBiYWNrZ3JvdW5kOiAjZmZlYmViO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0b3A6IDA7XG59XG4ubXktY2xhc3MxIC5yZW1hcmsge1xuICBjb2xvcjogIzM5NTg3MDtcbn1cblxuLm15LWNsYXNzMyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm15LWNsYXNzMiB7XG4gIGRpc3BsYXk6IGluaXRpYWw7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm1kbC1jaGlwIHtcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbm1kbC1jaGlwLWNvbnRhY3Qge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1kbC1jaGlwIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBtYXJnaW46IDJweCAwO1xuICBmb250LXNpemU6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5tZGwtY2hpcCB7XG4gIGhlaWdodDogMzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmYzdjNztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmM3YzcgIWltcG9ydGFudDtcbn1cblxuLm1kbC1jaGlwX19jb250YWN0IHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgY29sb3I6ICNmZjJiMmI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZjIzMjM7XG4gIC8qIG9wYWNpdHk6IDAuODsgKi9cbn1cblxuZGl2LmJsdWUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsZWZ0OiA0OHB4O1xuICB0b3A6IC0zMHB4O1xuICB3aWR0aDogMTcwcHg7XG59XG5cbiNhYmkxIHtcbiAgd2lkdGg6IDI0NXB4O1xuICBwYWRkaW5nOiAxcHggMCAxcHggMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xuICBjb2xvcjogI2ZmZjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2FiaTE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICMzOTU4NzA7XG59XG5cbi5udW1iZXJDaXJjbGUge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJveDtcbiAgYm9yZGVyOiAycHggc29saWQgIzM5NTg3MDtcbiAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XG59XG5cbi50ZXh0LWVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5ob3Y6aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBwYWRkaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMTA3ZDEzO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZlcnRpY2FsaG9yaXpvbnRhbCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDMwMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDEwJSAwIDAgNDAlO1xufVxuXG4uc2luZ2xlYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4uc2luZ2xlYnV0dG9uOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcbn1cblxuLm1kbC1jaGlwIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcbn1cblxuI2RlbGl2ZXJlZCB7XG4gIGNvbG9yOiAjMzk1ODcwO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuI3NldGRpc2gge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi50YWJsZWJhY2sge1xuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBzbGF0ZWdyZXksIHRyYW5zcGFyZW50IDEwMHB4KTtcbn1cblxuLmFsbGNvbXBsdGVkOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcbn1cblxuLmVtcHR5LXN0YXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbTtcbn1cbi5lbXB0eS1zdGF0ZSAuZW1wdHktc3RhdGUtbG9nbyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5lbXB0eS1zdGF0ZSAuZW1wdHktc3RhdGUtY29udGVudCBoMiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uZW1wdHktc3RhdGUgLmVtcHR5LXN0YXRlLWNvbnRlbnQgcCB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZW1wdHktc3RhdGUgLmxvYWRpbmctc3Bpbm5lciB7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4ub3JkZXJzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdhcDogMS41cmVtO1xuICBwYWRkaW5nOiA0cmVtO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5vcmRlci1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG59XG4ub3JkZXItY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cblxuLm9yZGVyLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuLm9yZGVyLWhlYWRlciAub3JkZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuLm9yZGVyLWhlYWRlciAub3JkZXItaW5mbyAudGFibGUtaW5mbywgLm9yZGVyLWhlYWRlciAub3JkZXItaW5mbyAudGltZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ub3JkZXItaGVhZGVyIC5vcmRlci1pbmZvIC50YWJsZS1pbmZvIGksIC5vcmRlci1oZWFkZXIgLm9yZGVyLWluZm8gLnRpbWUtaW5mbyBpIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5jYW5jZWxsZWQtaXRlbXMge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjVmNTtcbn1cbi5jYW5jZWxsZWQtaXRlbXMgLmNhbmNlbGxlZC1pdGVtIHtcbiAgY29sb3I6ICNmNDQzMzY7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMC4yNXJlbSAwO1xufVxuXG4ub3JkZXItaXRlbXMge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ub3JkZXItaXRlbSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4ub3JkZXItaXRlbS5jb21wbGV0ZWQge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBvcGFjaXR5OiAwLjc7XG59XG4ub3JkZXItaXRlbS5wcmVwYXJlZCB7XG4gIGJhY2tncm91bmQ6ICNlOGY1ZTk7XG59XG4ub3JkZXItaXRlbSAuaXRlbS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5vcmRlci1pdGVtIC5xdWFudGl0eS1jaXJjbGUge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLm9yZGVyLWl0ZW0gLml0ZW0tZGV0YWlscyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5vcmRlci1pdGVtIC5pdGVtLWRldGFpbHMgLml0ZW0tbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuLm9yZGVyLWl0ZW0gLml0ZW0tZGV0YWlscyAuaXRlbS1uYW1lIC5pdGVtLW11bHRpcGxpZXIge1xuICBjb2xvcjogI2Y0NDMzNjtcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xufVxuLm9yZGVyLWl0ZW0gLml0ZW0tZGV0YWlscyAucHJlcGFyYXRpb24tc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luOiAwLjI1cmVtIDA7XG59XG4ub3JkZXItaXRlbSAuaXRlbS1kZXRhaWxzIC5wcmVwYXJhdGlvbi1zdGF0dXMgLnByZXBhcmVkIHtcbiAgY29sb3I6ICM0Y2FmNTA7XG59XG4ub3JkZXItaXRlbSAuaXRlbS1kZXRhaWxzIC5pdGVtLXJlbWFya3Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG4gIG1hcmdpbjogMC4yNXJlbSAwO1xufVxuLm9yZGVyLWl0ZW0gLml0ZW0tZGV0YWlscyAuaXRlbS1yZW1hcmtzIGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm9yZGVyLWl0ZW0gLml0ZW0tZGV0YWlscyAuaXRlbS1vcHRpb25zIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLm9yZGVyLWl0ZW0gLml0ZW0tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuLm9yZGVyLWl0ZW0gLml0ZW0tYWN0aW9ucyAuYWN0aW9uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICM0Y2FmNTA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4ub3JkZXItaXRlbSAuaXRlbS1hY3Rpb25zIC5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U4ZjVlOTtcbn1cbi5vcmRlci1pdGVtIC5pdGVtLWFjdGlvbnMgLmFjdGlvbi1idXR0b24gaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5vcmRlci1pdGVtIC5pdGVtLWFjdGlvbnMgLmNvbXBsZXRlZC1zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG4gIGNvbG9yOiAjNGNhZjUwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ub3JkZXItaXRlbSAuaXRlbS1hY3Rpb25zIC5jb21wbGV0ZWQtc3RhdHVzIGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5vcmRlci1mb290ZXIge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm9yZGVyLWZvb3RlciAuY29tcGxldGUtYWxsLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLm9yZGVyLWZvb3RlciAuY29tcGxldGUtYWxsLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlNTM5MzU7XG59XG4ub3JkZXItZm9vdGVyIC5jb21wbGV0ZS1hbGwtYnV0dG9uIGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ub3JkZXItZm9vdGVyIC5vcmRlci1udW1iZXIge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBkaXJlY3Rpb246IGx0cjtcbiAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6IFwibGlnYVwiO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn0iLCIvKipzY3NzIGZvciBrZHMgY2xpZW50IHBhZ2UuLi4qL1xuLm1kbC1ncmlkIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxO1xufVxuXG4ubWRsLWNlbGwge1xuICBwYWRkaW5nOiAyNXB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0MjQyNDI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWRsLWNhcmQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgJl9fYWN0aW9ucyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuXG4ucmVtYXJrLWJveCA6OmJlZm9yZXtcbiAgY29udGVudDogXCLigKJcIjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiBhdXRvO1xuICBsZWZ0OiAyMTZweDtcbiAgYm90dG9tOiAyMXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLnJlbWFyayB7XG4gIGNvbG9yOiAjZDUzMjMyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5yZW1hcmstZGVsaXZlcmVkIHtcbiAgY29sb3I6ICMyNDI0MjQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLm5vcm1hbC1jaGVja1xue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMjhweDtcbiAgbGVmdDogMjM2cHg7XG59XG5cbi5ybWstY2hlY2tcbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDQ4cHg7XG4gIGxlZnQ6IDIzNnB4O1xufVxuLmRlbGl2ZXJlZC1jaGVja1xue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IDI2MnB4O1xufVxuXG4ubWRsLWNhcmQtZGlzaFxue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLmNhbmNlbGwge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZ2IoMjQwLCA0MCwgNSk7XG4gIGNvbG9yOiByZWQ7XG59XG5cblxuXG4ubXktY2xhc3MxIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMTMxO1xuICBiYWNrZ3JvdW5kOiAjZmZlYmViO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0b3A6IDA7XG4gIC8vIGRpc3BsYXk6IG5vbmU7XG4gIC5yZW1hcmt7XG4gICAgY29sb3I6IzM5NTg3MDtcbiAgfVxufVxuXG4ubXktY2xhc3MzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubXktY2xhc3MyIHtcbiAgZGlzcGxheTogaW5pdGlhbDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxubWRsLWNoaXAge1xuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xuICAmLWNvbnRhY3Qge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG5cbi5tZGwtY2hpcCB7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsXCJIZWx2ZXRpY2FcIixcIkFyaWFsXCIsc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xuICBtYXJnaW46IDJweCAwO1xuICBmb250LXNpemU6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cblxuLm1kbC1jaGlwIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjN2M3O1xuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZmZjN2M3ICFpbXBvcnRhbnQ7XG59XG4ubWRsLWNoaXBfX2NvbnRhY3Qge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBjb2xvcjogI2ZmMmIyYjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmMjMyMztcbiAgLyogb3BhY2l0eTogMC44OyAqL1xufVxuXG5cbmRpdi5ibHVlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGVmdDogNDhweDtcbiAgdG9wOiAtMzBweDtcbiAgd2lkdGg6IDE3MHB4O1xufVxuXG4jYWJpMSB7XG4gIHdpZHRoOiAyNDVweDtcbiAgcGFkZGluZzogMXB4IDAgMXB4IDBweDtcbiAgLy8gYmFja2dyb3VuZDogIzM5NTg3MDtcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgXG4gIGNvbG9yOiAjZmZmO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcblxuICBmb250LXNpemU6IDIwcHg7XG59XG4jYWJpMTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICAvLyBib3JkZXItdG9wOiAxMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgIzM5NTg3MDtcbn1cblxuLm51bWJlckNpcmNsZSB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAvLyBtYXJnaW46IC0xNXB4IDI1cHggLTIzcHggLTEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ib3g7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzOTU4NzA7XG4gIG1hcmdpbi1ib3R0b206IC0zMHB4O1xufVxuXG4udGV4dC1lbGxpcHNpc1xue1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmhvdjpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMxMDdkMTM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udmVydGljYWxob3Jpem9udGFsIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMTAlIDAgMCA0MCU7XG59XG5cblxuLnNpbmdsZWJ1dHRvblxue1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udDogYm9sZDtcbiAgYmFja2dyb3VuZDogIGJsYWNrICFpbXBvcnRhbnQ7XG5cbiAgJjpob3ZlcntcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCByZWQ7XG4gIH1cbn1cblxuXG4ubWRsLWNoaXB7XG4gIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIHJlZDtcbiAgLy8gJjpob3ZlcntcbiAgLy8gICBib3JkZXItYm90dG9tOjJweCBzb2xpZCByZWQ7XG4gIC8vIH1cbn1cbiNkZWxpdmVyZWR7XG5jb2xvcjogIzM5NTg3MDtcbmZvbnQtZmFtaWx5OiAgJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcbn1cblxuI3NldGRpc2h7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cbi50YWJsZWJhY2t7XG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHNsYXRlZ3JleSwgdHJhbnNwYXJlbnQgMTAwcHgpO1xufVxuXG5cbi5hbGxjb21wbHRlZHtcbiAgJjpob3ZlcntcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCByZWQ7XG5cbiAgfVxufVxuXG4vLyBFbXB0eSBTdGF0ZVxuLmVtcHR5LXN0YXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbTtcblxuICAuZW1wdHktc3RhdGUtbG9nbyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cblxuICAuZW1wdHktc3RhdGUtY29udGVudCB7XG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICB9XG5cbiAgLmxvYWRpbmctc3Bpbm5lciB7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gIH1cbn1cblxuLy8gT3JkZXJzIEdyaWRcbi5vcmRlcnMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxLjVyZW07XG4gIHBhZGRpbmc6IDRyZW07XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLy8gT3JkZXIgQ2FyZFxuLm9yZGVyLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIH1cbn1cblxuLy8gT3JkZXIgSGVhZGVyXG4ub3JkZXItaGVhZGVyIHtcbiAgYmFja2dyb3VuZDojZjVmNWY1O1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcblxuICAub3JkZXItaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG5cbiAgICAudGFibGUtaW5mbywgLnRpbWUtaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMC41cmVtO1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgIGkge1xuICAgICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQ2FuY2VsbGVkIEl0ZW1zXG4uY2FuY2VsbGVkLWl0ZW1zIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY1ZjU7XG5cbiAgLmNhbmNlbGxlZC1pdGVtIHtcbiAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwLjI1cmVtIDA7XG4gIH1cbn1cblxuLy8gT3JkZXIgSXRlbXNcbi5vcmRlci1pdGVtcyB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5vcmRlci1pdGVtIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAmLmNvbXBsZXRlZCB7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAmLnByZXBhcmVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZThmNWU5O1xuICB9XG5cbiAgLml0ZW0tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuXG4gIC5xdWFudGl0eS1jaXJjbGUge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAuaXRlbS1kZXRhaWxzIHtcbiAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAuaXRlbS1uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG5cbiAgICAgIC5pdGVtLW11bHRpcGxpZXIge1xuICAgICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wcmVwYXJhdGlvbi1zdGF0dXMge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBtYXJnaW46IDAuMjVyZW0gMDtcblxuICAgICAgLnByZXBhcmVkIHtcbiAgICAgICAgY29sb3I6ICM0Y2FmNTA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tcmVtYXJrcyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAwLjI1cmVtO1xuICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjZjQ0MzM2O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLW9wdGlvbnMge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuICB9XG5cbiAgLml0ZW0tYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuXG4gICAgLmFjdGlvbi1idXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiAjNGNhZjUwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlOGY1ZTk7XG4gICAgICB9XG5cbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbXBsZXRlZC1zdGF0dXMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDAuMjVyZW07XG4gICAgICBjb2xvcjogIzRjYWY1MDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gT3JkZXIgRm9vdGVyXG4ub3JkZXItZm9vdGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAuY29tcGxldGUtYWxsLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmNDQzMzY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlNTM5MzU7XG4gICAgfVxuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgLm9yZGVyLW51bWJlciB7XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbi8vIE1hdGVyaWFsIEljb25zXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG4gIC13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/kdscocketclient/kdscocketclient.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/kdscocketclient/kdscocketclient.component.ts ***!
  \**************************************************************/
/*! exports provided: KdscocketclientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KdscocketclientComponent", function() { return KdscocketclientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_socketconfig_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/socketconfig.service */ "./src/app/service/socketconfig.service.ts");
/* harmony import */ var _angular_mdl_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-mdl/core */ "./node_modules/@angular-mdl/core/fesm5/angular-mdl-core.js");




var KdscocketclientComponent = /** @class */ (function () {
    function KdscocketclientComponent(SocketconfigService, mdlSnackbarService) {
        // let ipAddress = "192.168.1.100";
        // let ipAddress = "192.168.225.110";
        this.SocketconfigService = SocketconfigService;
        this.mdlSnackbarService = mdlSnackbarService;
        this.KotorderList = [];
        this.orderList = [];
        this.myDate = new Date();
        this.math = Math;
        this.audio = new Audio();
        this.time = new Date();
        this.checkdishList = [];
        this.selectedCategoriesList = [];
        this.map = new Map();
        this.newMap = new Map();
        this.uniqueCountList = [];
        this.count = 0;
        this.selectedKdsType = '';
        this.cancelDishList = [];
        this.singleList = [];
        // let ipAddress = SocketconfigService.getIpaddress();
        // console.log("SocketconfigService.getIpaddress()", ipAddress);
        // let socketServerUrl = `http://${ipAddress}:7000`;
        // //   this.socket = io("http://${ipAddress}:7000");
        // this.socket = io(socketServerUrl);
        this.socket = SocketconfigService.getSocketConnection();
        console.log("this.socket", this.socket);
        this.checkifrecordsexist();
        this.socket.off("Check-Exist-Order-response");
        this.socket.off("kot-orders-response");
        this.socket.off("Dishes-Ready-response");
        this.socket.off("Kot-Accepted-response");
        this.socket.off("dish-prepared-response");
        this.socket.off("update-kds-saved-orders-response");
        this.getSocketResponse();
        this.getUpdateSavedOrdersResponse();
        this.startTime(); //this will start the Timer
    }
    KdscocketclientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testData();
        this.cancelDishList = [];
        this.selectedCategoriesList = localStorage.getItem('selectedCategoriesList') != null ? JSON.parse(localStorage.getItem('selectedCategoriesList')) : [];
        this.selectedKdsType = localStorage.getItem('selectedKdsType') != null ? localStorage.getItem('selectedKdsType') : '';
        console.log("selectedKdsType-", this.selectedKdsType);
        /** below code snippet will catch the respose data from the Server and push into the KotorderList*/
        if (this.KotorderList.length != 0) {
            console.log("entered");
            var _loop_1 = function (i) {
                var e_1, _a, e_2, _b, e_3, _c;
                this_1.KotorderList[i].dateTimeForDisplay = new Date(this_1.KotorderList[i].dateTimeForDisplay);
                if (this_1.KotorderList[i].table_id === "1001") {
                    this_1.KotorderList[i].tableName = "Take Away";
                }
                if (this_1.KotorderList[i].table_id === "1002") {
                    this_1.KotorderList[i].tableName = "Door Delivery";
                }
                if (this_1.KotorderList[i].table_id === "1004") {
                    this_1.KotorderList[i].tableName = "QSR";
                }
                var _loop_2 = function (dish) {
                    var flag = this_1.selectedCategoriesList.some(function (item) { return item === dish.menu_id_fk; });
                    dish.showCategoryFlag = true;
                };
                try {
                    // let index1 =  this.KotorderList[i].dishList.findIndex(x=>x.kdsFlag === false)
                    // console.log("index1",index1)
                    // if(index1 >-1){
                    //   this.KotorderList[i].dishList.splice(index1,1);
                    // }
                    // Show only selected category dish
                    for (var _d = (e_1 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this_1.KotorderList[i].dishList)), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var dish = _e.value;
                        _loop_2(dish);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                // Remove KOT after all dishes have been delivered or prepared.
                if (this_1.selectedKdsType === "kds" || this_1.selectedKdsType === "expo") {
                    var tempflag = false;
                    this_1.KotorderList[i].showflag = false;
                    try {
                        for (var _f = (e_2 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this_1.KotorderList[i].dishList)), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var dish = _g.value;
                            if (dish.recentDishQuantity !== 0 && dish.showCategoryFlag == true && dish.kdsFlag === true) {
                                tempflag = true;
                                // break; 
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    if (tempflag) {
                        this_1.KotorderList[i].showflag = true;
                    }
                }
                if (this_1.selectedKdsType === "prep") {
                    var tempflag = false;
                    this_1.KotorderList[i].showflag = false;
                    try {
                        for (var _h = (e_3 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this_1.KotorderList[i].dishList)), _j = _h.next(); !_j.done; _j = _h.next()) {
                            var dish = _j.value;
                            if (dish.recentDishQuantity !== 0 && dish.showCategoryFlag == true && dish.kdsFlag === true && dish.preparedDishQuantity != dish.quantity_dish) {
                                tempflag = true;
                                // break; 
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    if (tempflag) {
                        this_1.KotorderList[i].showflag = true;
                    }
                }
                // Store Take Away, Door Delivery & QSR Orders to KDS for close order
                if (this_1.KotorderList[i].table_id === "1001" || this_1.KotorderList[i].table_id === "1002" || this_1.KotorderList[i].table_id === "1004") {
                    if (this_1.KotorderList[i].showflag === false) {
                        this_1.deleteLocalStorageOrder(this_1.KotorderList[i].order_id);
                    }
                    else {
                        var savedOrders = localStorage.getItem('savedOrders') != null ? JSON.parse(localStorage.getItem('savedOrders')) : [];
                        var savedOrderIndex = savedOrders.findIndex(function (order) { return order.order_id === _this.KotorderList[i].order_id; });
                        if (savedOrderIndex !== -1) {
                            savedOrders[savedOrderIndex] = this_1.KotorderList[i];
                        }
                        else {
                            savedOrders.push(this_1.KotorderList[i]);
                        }
                        localStorage.setItem('savedOrders', JSON.stringify(savedOrders));
                    }
                }
            };
            var this_1 = this;
            // this.KotorderList = this.KotorderList;
            for (var i = 0; i < this.KotorderList.length; i++) {
                _loop_1(i);
            }
            this.KotorderList.sort(function (a, b) {
                var orderA = a.externalOrderId.toUpperCase();
                var orderB = b.externalOrderId.toUpperCase();
                if (orderA < orderB) {
                    return 1;
                }
                if (orderA > orderB) {
                    return -1;
                }
                return 0;
            });
            console.log("this.KotorderList -", this.KotorderList);
        }
        // this.list = [];
        // this.secondlist = [];
        // /** below code snippet will catch the respose data from the Server and push into the KotorderList*/
        // if (this.KotorderList.length != 0) {
        //   for (let i = 0; i < this.KotorderList.length; i++) {
        //     for (let j = 0; j < this.KotorderList[i].kotforkdsList.length; j++) {
        //       this.list.push(this.KotorderList[i].kotforkdsList[j]);
        //     }
        //   }
        // }
    };
    /**
     * method is to get response from server ('kot-orders-response' is Listener)
     */
    KdscocketclientComponent.prototype.getSocketResponse = function () {
        var _this = this;
        this.socket.on("kot-orders-response", function (resposedata) {
            _this.playSound();
            console.log("resposedata", resposedata);
            _this.KotorderList = [];
            _this.KotorderList = resposedata;
            // Store Take Away, Door Delivery & QSR Orders to KDS for close order
            _this.addOrdersFromLocalStorage();
            _this.ngOnInit();
        });
    };
    /**
     * method is to send respose to server for order accepted intimation
     * @param Kotorder
     */
    KdscocketclientComponent.prototype.orderaccepted = function (Kotorder) {
        var kotacceptobject = {
            table_id: Kotorder.table_id,
            order_Id: Kotorder.order_id
        };
        this.socket.emit("Kot-Accepted", kotacceptobject);
    };
    /**
     *method is to send the dishes completed response to the Server
     * @param Kotorder
     */
    KdscocketclientComponent.prototype.dishescompleted = function (Kotorder) {
        if (this.socket.connected) {
            this.compareList = [];
            this.orderList = Kotorder.dishList;
            console.log("this.KotorderList.....", this.orderList);
            for (var i = 0; i < this.orderList.length; i++) {
                if (this.orderList[i].showCategoryFlag === true) {
                    this.compareList.push({
                        dish_id: this.orderList[i].dish_id,
                        dish_name: this.orderList[i].dish_name,
                        count: this.orderList[i].recentDishQuantity,
                        optionId: this.orderList[i].optionId,
                        uniqueDish_Id: this.orderList[i].uniqueDishId,
                        // recentDishQuantity: 0,
                        kdsrecentDishQuantity: this.orderList[i].recentDishQuantity,
                    });
                }
            }
            var finalObject = {
                compareList: this.compareList,
                Order_Id: Kotorder.order_id,
                externalOrder_Id: Kotorder.externalOrderId,
                table_id: Kotorder.table_id,
                completed_Time: new Date(),
                orderStatus: Kotorder.orderStatus,
                tableStatusId: 2,
                message: "Dishes are Ready.."
            };
            console.log("finalObject -", finalObject);
            // this.pauseTimer();
            this.socket.emit("Dishes-Ready", finalObject);
            // Store Take Away, Door Delivery & QSR Orders to KDS for close order
            if (Kotorder.table_id === "1001" || Kotorder.table_id === "1002" || Kotorder.table_id === "1004") {
                this.changestatusOrder(finalObject);
                this.sendUpdatedSavedOrders();
            }
            this.showSnackbar();
            this.ngOnInit();
        }
        else {
            this.mdlSnackbarService.showSnackbar({
                message: "KDS Disconnected! Please check POS or Network Connection"
            });
        }
    };
    KdscocketclientComponent.prototype.showSnackbar = function () {
        this.mdlSnackbarService.showSnackbar({
            message: "Order Inserted successfully.."
        });
    };
    /**
     * Method is to start the Timer
     */
    KdscocketclientComponent.prototype.startTime = function () {
        var _this = this;
        this.interval = setInterval(function () {
            //replaced function() by ()=>
            _this.myDate = new Date();
        }, 1000);
    };
    KdscocketclientComponent.prototype.playSound = function () {
        console.log("Ring");
        this.audio.src = "assets/audio/just-saying.mp3";
        this.audio.load();
        this.audio.play();
    };
    KdscocketclientComponent.prototype.pauseTimer = function () {
        clearInterval(this.interval);
    };
    KdscocketclientComponent.prototype.checkifrecordsexist = function () {
        console.log("methd calleds");
        this.socket.emit("Check-Exist-Order");
    };
    KdscocketclientComponent.prototype.getresposefromserver = function () {
        var _this = this;
        this.socket.on("Check-Exist-Order-response", function (resposedata1111111) {
            _this.playSound();
            console.log("resposedata1111111", resposedata1111111);
            _this.KotorderList = [];
            _this.KotorderList = resposedata1111111;
            _this.ngOnInit();
        });
    };
    KdscocketclientComponent.prototype.removeOrderFromNEWMAPVALUEStorage = function (orderId) {
        var availbleDishList = new Map();
        availbleDishList = new Map(JSON.parse(localStorage.getItem("NEW")));
        availbleDishList.delete(orderId);
        localStorage.setItem("NEWMAPVALUE", JSON.stringify(Array.from(availbleDishList.entries())));
        return "1";
    };
    KdscocketclientComponent.prototype.ngOnDestroy = function () {
        if (this.interval)
            clearInterval(this.interval);
    };
    KdscocketclientComponent.prototype.clickoptions = function (dish, Kotorder) {
        if (this.socket.connected) {
            console.log("dish", dish);
            if (dish.recentDishQuantity !== 0) {
                var index = this.singleList.findIndex(function (x) { return x.uniqueDish_Id === dish.uniqueDishId; });
                if (index > -1) {
                    if (this.singleList[index].kdsrecentDishQuantity < dish.recentDishQuantity) {
                        // this.singleList[index].kdsrecentDishQuantity =
                        //   this.singleList[index].kdsrecentDishQuantity + 1;
                        this.singleList[index].kdsrecentDishQuantity = 1; //everytime it will take only one element count
                    }
                    else {
                        alert("you cant add more items now..");
                    }
                }
                else {
                    ////KDS  showing order place time and dishes But When Marked one dish as food ready another dishes auto showing food ready(Solved)////
                    this.singleList = [];
                    this.singleList.push({
                        dish_id: dish.dish_id,
                        dish_name: dish.dish_name,
                        count: dish.recentDishQuantity,
                        optionId: dish.optionId,
                        uniqueDish_Id: dish.uniqueDishId,
                        kdsrecentDishQuantity: 1
                    });
                }
                var finalObject = {
                    compareList: this.singleList,
                    Order_Id: Kotorder.order_id,
                    externalOrder_Id: Kotorder.externalOrderId,
                    table_id: Kotorder.table_id,
                    completed_Time: new Date(),
                    orderStatus: Kotorder.orderStatus,
                    tableStatusId: 2,
                    message: "Dishes are Ready.."
                };
                console.log("finalObject single", finalObject);
                this.socket.emit("Dishes-Ready", finalObject);
                // Store Take Away, Door Delivery & QSR Orders to KDS for close order
                if (Kotorder.table_id === "1001" || Kotorder.table_id === "1002" || Kotorder.table_id === "1004") {
                    this.changestatusOrder(finalObject);
                    this.sendUpdatedSavedOrders();
                }
                // this.showSnackbar();
                this.mdlSnackbarService.showSnackbar({
                    message: this.singleList.length +
                        " Order Inserted successfully on Table:  " +
                        Kotorder.tableName
                });
                this.ngOnInit();
            }
            else {
                this.mdlSnackbarService.showSnackbar({
                    message: "Can not edited as Dishes are allready Delivered.."
                });
            }
        }
        else {
            this.mdlSnackbarService.showSnackbar({
                message: "KDS Disconnected! Please check POS or Network Connection"
            });
        }
    };
    KdscocketclientComponent.prototype.prepKdsClickOption = function (dish, Kotorder) {
        console.log("prep kds tick");
        if (this.socket.connected) {
            if (dish.preparedDishQuantity !== dish.quantity_dish) {
                this.singleList = [];
                this.singleList.push({
                    dish_id: dish.dish_id,
                    dish_name: dish.dish_name,
                    optionId: dish.optionId,
                    uniqueDish_Id: dish.uniqueDishId,
                    kdsPreparedDishQuantity: 1,
                    quantity_dish: dish.quantity_dish
                });
                var finalObject = {
                    compareList: this.singleList,
                    Order_Id: Kotorder.order_id,
                    externalOrder_Id: Kotorder.externalOrderId,
                    table_id: Kotorder.table_id,
                    completed_Time: new Date(),
                    orderStatus: Kotorder.orderStatus,
                    tableStatusId: 2,
                    message: "Dish Prepared.."
                };
                console.log("finalObject single", finalObject);
                this.socket.emit("dish-prepared", finalObject);
                if (Kotorder.table_id === "1001" || Kotorder.table_id === "1002" || Kotorder.table_id === "1004") {
                    this.dishPreparedChangestatusOrder(finalObject);
                    this.sendUpdatedSavedOrders();
                }
                this.mdlSnackbarService.showSnackbar({
                    message: "Dish Prepared! " + dish.dish_name
                        + " for Table: " + Kotorder.tableName
                });
                this.ngOnInit();
            }
            else {
                this.mdlSnackbarService.showSnackbar({
                    message: "All Dishe Qty are Allready Prepared.."
                });
            }
        }
        else {
            this.mdlSnackbarService.showSnackbar({
                message: "KDS Disconnected! Please check POS or Network Connection"
            });
        }
    };
    KdscocketclientComponent.prototype.addOrdersFromLocalStorage = function () {
        var _this = this;
        var savedOrders = localStorage.getItem('savedOrders') != null ? JSON.parse(localStorage.getItem('savedOrders')) : [];
        console.log('savedOrders: ', savedOrders);
        savedOrders.forEach(function (savedOrder) {
            if (!_this.KotorderList.some(function (order) { return order.order_id === savedOrder.order_id; })) {
                _this.KotorderList.push(savedOrder);
            }
        });
        console.log('Updated KotorderList (response + savedOrder)', this.KotorderList);
    };
    KdscocketclientComponent.prototype.changestatusOrder = function (kdsObject) {
        if (kdsObject.compareList.length != 0) {
            var savedOrders = localStorage.getItem('savedOrders') != null ? JSON.parse(localStorage.getItem('savedOrders')) : [];
            var billmodel = savedOrders.find(function (order) { return order.order_id === kdsObject.Order_Id; });
            var _loop_3 = function (i) {
                var index = billmodel.dishList.findIndex(function (x) { return x.uniqueDishId === kdsObject.compareList[i].uniqueDish_Id; });
                if (index > -1 && billmodel.dishList[index].recentDishQuantity !== 0) {
                    billmodel.dishList[index].recentDishQuantity = billmodel.dishList[index].oldrecentDishQuantity - kdsObject.compareList[i].kdsrecentDishQuantity;
                    billmodel.dishList[index].oldrecentDishQuantity = billmodel.dishList[index].recentDishQuantity;
                }
            };
            for (var i = 0; i < kdsObject.compareList.length; i++) {
                _loop_3(i);
            }
            var savedOrderIndex = savedOrders.findIndex(function (order) { return order.order_id === kdsObject.Order_Id; });
            if (savedOrderIndex !== -1) {
                savedOrders[savedOrderIndex] = billmodel;
                localStorage.setItem('savedOrders', JSON.stringify(savedOrders));
            }
            var KotorderListIndex = this.KotorderList.findIndex(function (order) { return order.order_id === kdsObject.Order_Id; });
            if (KotorderListIndex !== -1) {
                this.KotorderList[KotorderListIndex] = billmodel;
            }
            console.log('billmodel -', billmodel);
        }
    };
    KdscocketclientComponent.prototype.dishPreparedChangestatusOrder = function (kdsObject) {
        if (kdsObject.compareList.length != 0) {
            var savedOrders = localStorage.getItem('savedOrders') != null ? JSON.parse(localStorage.getItem('savedOrders')) : [];
            var billmodel = savedOrders.find(function (order) { return order.order_id === kdsObject.Order_Id; });
            var _loop_4 = function (i) {
                var index = billmodel.dishList.findIndex(function (x) { return x.uniqueDishId === kdsObject.compareList[i].uniqueDish_Id; });
                if (index > -1 && billmodel.dishList[index].preparedDishQuantity !== billmodel.dishList[index].quantity_dish) {
                    console.log("old preparedDishQuantity - ", billmodel.dishList[index].preparedDishQuantity);
                    if (billmodel.dishList[index].preparedDishQuantity == undefined) {
                        billmodel.dishList[index].preparedDishQuantity = kdsObject.compareList[i].kdsPreparedDishQuantity;
                    }
                    else {
                        billmodel.dishList[index].preparedDishQuantity = billmodel.dishList[index].preparedDishQuantity + kdsObject.compareList[i].kdsPreparedDishQuantity;
                    }
                }
            };
            for (var i = 0; i < kdsObject.compareList.length; i++) {
                _loop_4(i);
            }
            var savedOrderIndex = savedOrders.findIndex(function (order) { return order.order_id === kdsObject.Order_Id; });
            if (savedOrderIndex !== -1) {
                savedOrders[savedOrderIndex] = billmodel;
                localStorage.setItem('savedOrders', JSON.stringify(savedOrders));
            }
            var KotorderListIndex = this.KotorderList.findIndex(function (order) { return order.order_id === kdsObject.Order_Id; });
            if (KotorderListIndex !== -1) {
                this.KotorderList[KotorderListIndex] = billmodel;
            }
            console.log('billmodel -', billmodel);
        }
    };
    KdscocketclientComponent.prototype.deleteLocalStorageOrder = function (order_id) {
        var savedOrders = localStorage.getItem('savedOrders') != null ? JSON.parse(localStorage.getItem('savedOrders')) : [];
        var savedOrdersIndex = savedOrders.findIndex(function (order) { return order.order_id === order_id; });
        if (savedOrdersIndex !== -1) {
            savedOrders.splice(savedOrdersIndex, 1);
            console.log('deleteOrderFromLocalStorage - savedOrders', order_id);
        }
        localStorage.setItem('savedOrders', JSON.stringify(savedOrders));
    };
    KdscocketclientComponent.prototype.sendUpdatedSavedOrders = function () {
        var savedOrders = localStorage.getItem('savedOrders') != null ? JSON.parse(localStorage.getItem('savedOrders')) : [];
        console.log('update-kds-saved-orders - ', savedOrders);
        this.socket.emit('update-kds-saved-orders', savedOrders);
    };
    KdscocketclientComponent.prototype.getUpdateSavedOrdersResponse = function () {
        var _this = this;
        this.socket.on("update-kds-saved-orders-response", function (responseSavedOrders) {
            console.log("update-kds-saved-orders-response -", responseSavedOrders);
            var savedOrders = localStorage.getItem('savedOrders') != null ? JSON.parse(localStorage.getItem('savedOrders')) : [];
            responseSavedOrders.forEach(function (responseSavedOrder) {
                var savedOrderIndex = savedOrders.findIndex(function (order) { return order.order_id === responseSavedOrder.order_id; });
                if (savedOrderIndex !== -1) {
                    savedOrders[savedOrderIndex] = responseSavedOrder;
                }
                else {
                    savedOrders.push(responseSavedOrder);
                }
            });
            localStorage.setItem('savedOrders', JSON.stringify(savedOrders));
            _this.socket.emit("Check-Exist-Order");
        });
    };
    KdscocketclientComponent.prototype.testData = function () {
        this.KotorderList = [
            {
                "printBillcount": 0,
                "round_off_flag": false,
                "dish_total_amt": 90.1639344262295,
                "food_total": 90.1639344262295,
                "ignorTaxValue": 0,
                "ignorTaxValueBackend": 0,
                "taxAmountAfterOffer": 19.83606557377049,
                "taxAmountOnSubtotal": 19.83606557377049,
                "applyDiscountonSubtotalValue": 90.1639344262295,
                "taxList": [
                    {
                        "name": "VAT-N",
                        "taxValue": 22,
                        "taxCalculatedAmount": 19.83606557377049
                    }
                ],
                "dish_final_discount_amt": "0",
                "dishOfferAmountValue": 0,
                "alcohol_total": 0,
                "dish_total": 90.1639344262295,
                "table_id": "1",
                "order_id": "101170625002454",
                "tableName": "Table-1",
                "zomatogold_per": 0,
                "zomatogold_Amount": 0,
                "coupondiscount_per": 0,
                "discount_per": "0.0",
                "discount_amt": "0.0",
                "cgst_per": 0,
                "cgst_amt": "0",
                "ServiceCharge": 0.5,
                "chargesList": [
                    {
                        "chargesName": "sc",
                        "chargesValue": 0.5
                    }
                ],
                "sgst_amt": "0",
                "sgst_per": 0,
                "orderStatus": "pending",
                "tableAreaName": "Ground-G",
                "orderType": "Dine In",
                "customerLoyality": 0,
                "dish_discount_per": "0.0",
                "dish_discount_amt": 0,
                "dateTime": "2025-06-17 00:24:57",
                "order_count": 13,
                "externalOrderId": "NHPF-R18618",
                "offerAmountPercentage": 0,
                "offerAmountValue": 0,
                "offerCouponName": "--",
                "orderDay": "tuesday",
                "dateTimeForDisplay": "2025-06-17 00:24:57",
                "total_pay_amt": "90.66",
                "serviceChargeAmount": "0.5",
                "reason": "",
                "Discountreason": "",
                "personCountonTable": "2",
                "kotTokenNumber": 1,
                "captainName": "admin",
                "givenAmount": 0,
                "returnAmount": 0,
                "dishList": [
                    {
                        "isClosed": false,
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "dishRemarkPerQty": [],
                        "displayDishName": "",
                        "total_amt_old": 90.1639344262295,
                        "dish_total_amt_old": 90.1639344262295,
                        "dish_total_amt_for_display_old": 110,
                        "total_amt": 90.1639344262295,
                        "dishAmount": 90.1639344262295,
                        "dish_total_amt": 90.1639344262295,
                        "dish_total_amt_for_display": 110,
                        "dishAmt": 90.1639344262295,
                        "optionAmount": "",
                        "optionDishAmountWithTax": "",
                        "dish_id": 9814,
                        "dish_name": "2 Phulka + Palak Paneer + Chawal + Chaanch ",
                        "quantity_dish": 1,
                        "quantity_dish_old": 1,
                        "optionId": "",
                        "optionName": "--",
                        "ignoreTax": false,
                        "menu_id_fk": 1127,
                        "recentDishQuantity": 1,
                        "oldrecentDishQuantity": 1,
                        "uniqueDishId": "9814",
                        "catalogueId": "9814",
                        "dishOptionName": "",
                        "dishDiscountAmount": 0,
                        "dishDiscounntPercentage": 0,
                        "dishCalculatedDiscountValue": 0,
                        "dishDiscounntFinalPercentage": 0,
                        "printerId": 40,
                        "printerType": "lan",
                        "printSize": 80,
                        "printCharacters": 300,
                        "printerValue": "192.168.0.100",
                        "kdsFlag": true,
                        "printerModel": "Network",
                        "copyPrinterModel": "",
                        "TotalDishGstTax_per": 22,
                        "DishtaxAfterOffer": 0,
                        "applyOfferFlag": true,
                        "randomDishName": "",
                        "preparedDishQuantity": 0,
                        "dish_amount_with_tax": 110,
                        "total_amt_for_display": 110,
                        "total_amt_for_display_old": 110,
                        "parkDishQuantity": 0,
                        "productCode": "0",
                        "dishType": "normal",
                        "remark": "",
                        "flag": 0,
                        "taxGroupDetails": {
                            "groupId": 156,
                            "groupname": "VAT(INC)-NEW",
                            "groupValuePer": 22,
                            "taxOptionId": 1,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 199,
                                    "tax": "VAT-N",
                                    "description": null,
                                    "taxValuePer": 22,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        }
                    }
                ],
                "captainid": "69",
                "quickSectionName": null,
                "cust_name": ""
            },
            {
                "printBillcount": 0,
                "round_off_flag": false,
                "dish_total_amt": 800,
                "food_total": 800,
                "ignorTaxValue": 800,
                "ignorTaxValueBackend": 800,
                "taxAmountAfterOffer": 0,
                "taxAmountOnSubtotal": 0,
                "applyDiscountonSubtotalValue": 800,
                "taxList": [
                    {
                        "name": "Zero Tax",
                        "taxValue": 0,
                        "taxCalculatedAmount": 0
                    }
                ],
                "dish_final_discount_amt": "0",
                "dishOfferAmountValue": 0,
                "alcohol_total": 0,
                "dish_total": 800,
                "table_id": "2",
                "order_id": "102160625235129",
                "tableName": "Table-2",
                "zomatogold_per": 0,
                "zomatogold_Amount": 0,
                "coupondiscount_per": 0,
                "discount_per": "0.0",
                "discount_amt": "0.0",
                "cgst_per": 0,
                "cgst_amt": "0",
                "ServiceCharge": 0.5,
                "chargesList": [
                    {
                        "chargesName": "sc",
                        "chargesValue": 0.5
                    }
                ],
                "sgst_amt": "0",
                "sgst_per": 0,
                "orderStatus": "pending",
                "tableAreaName": "Ground-G",
                "orderType": "Dine In",
                "customerLoyality": 0,
                "dish_discount_per": "0.0",
                "dish_discount_amt": 0,
                "dateTime": "2025-06-17 00:31:59",
                "externalOrderId": "NHPF-R18616",
                "offerAmountPercentage": 0,
                "offerAmountValue": 0,
                "offerCouponName": "--",
                "orderDay": "monday",
                "order_count": 11,
                "dateTimeForDisplay": "2025-06-16 23:51:42",
                "total_pay_amt": "800.50",
                "serviceChargeAmount": "0.5",
                "reason": "sdsd",
                "Discountreason": "",
                "personCountonTable": "2",
                "kotTokenNumber": 2,
                "captainName": "admin",
                "dishList": [
                    {
                        "isClosed": false,
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "dishRemarkPerQty": [],
                        "displayDishName": "",
                        "displayOptionName": "",
                        "total_amt_old": 400,
                        "dish_total_amt_old": 800,
                        "dish_total_amt_for_display_old": 800,
                        "total_amt": 400,
                        "dishAmount": 400,
                        "dish_total_amt": 800,
                        "dish_total_amt_for_display": 800,
                        "dishAmt": 400,
                        "optionAmount": "",
                        "dish_id": 16217,
                        "dish_name": "Alcoholic drinks2",
                        "quantity_dish": 2,
                        "quantity_dish_old": 2,
                        "optionId": "",
                        "optionName": "--",
                        "ignoreTax": true,
                        "menu_id_fk": 1398,
                        "recentDishQuantity": 1,
                        "oldrecentDishQuantity": 1,
                        "uniqueDishId": "16217",
                        "catalogueId": "16217",
                        "dishOptionName": "",
                        "dishDiscountAmount": 0,
                        "dishDiscounntPercentage": 0,
                        "dishCalculatedDiscountValue": 0,
                        "dishDiscounntFinalPercentage": 0,
                        "printerId": 40,
                        "printerType": "lan",
                        "printSize": 80,
                        "printCharacters": 300,
                        "printerValue": "192.168.0.100",
                        "kdsFlag": true,
                        "printerModel": "Network",
                        "copyPrinterModel": "",
                        "TotalDishGstTax_per": 0,
                        "DishtaxAfterOffer": 0,
                        "applyOfferFlag": true,
                        "randomDishName": "",
                        "preparedDishQuantity": 0,
                        "dish_amount_with_tax": 400,
                        "total_amt_for_display": 400,
                        "total_amt_for_display_old": 400,
                        "productCode": "4",
                        "dishType": "normal",
                        "remark": "",
                        "taxGroupDetails": {
                            "groupId": 29,
                            "groupname": "Zero Tax",
                            "groupValuePer": 0,
                            "taxOptionId": 2,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 36,
                                    "tax": "Zero Tax",
                                    "description": null,
                                    "taxValuePer": 0,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        }
                    }
                ],
                "captainid": "69",
                "cancelDishList": [
                    {
                        "dish_name": " Lemonade",
                        "quantity_dish": 2,
                        "dish_id": 16330,
                        "optionId": "",
                        "catalogueId": "16330",
                        "dishOptionName": "",
                        "optionName": "--",
                        "cancelReason": "sdsd",
                        "printerId": 0,
                        "printSize": 0,
                        "printerType": null,
                        "printCharacters": 0,
                        "printerValue": null,
                        "kdsFlag": false,
                        "printerModel": null,
                        "copyPrinterModel": null,
                        "TotalDishGstTax_per": 5,
                        "applyOfferFlag": false,
                        "DishtaxAfterOffer": 0,
                        "dishAmt": 190.47619047619048,
                        "optionAmount": "",
                        "taxGroupDetails": {
                            "groupId": 155,
                            "groupname": "Gst(Inc)-New",
                            "groupValuePer": 5,
                            "taxOptionId": 1,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 197,
                                    "tax": "CGST -N",
                                    "description": null,
                                    "taxValuePer": 2.5,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                },
                                {
                                    "taxId": 198,
                                    "tax": "SGST-N",
                                    "description": null,
                                    "taxValuePer": 2.5,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        },
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "ncFlag": false,
                        "parkFlag": false,
                        "randomDishName": "",
                        "displayDishName": " Lemonade",
                        "productCode": "--",
                        "dishType": "normal"
                    }
                ],
                "cust_name": ""
            },
            {
                "printBillcount": 0,
                "round_off_flag": false,
                "dish_total_amt": 980.327868852459,
                "food_total": 980.327868852459,
                "ignorTaxValue": 800,
                "ignorTaxValueBackend": 800,
                "taxAmountAfterOffer": 39.67213114754098,
                "taxAmountOnSubtotal": 39.67213114754098,
                "applyDiscountonSubtotalValue": 980.327868852459,
                "taxList": [
                    {
                        "name": "VAT-N",
                        "taxValue": 22,
                        "taxCalculatedAmount": 39.67213114754098
                    },
                    {
                        "name": "Zero Tax",
                        "taxValue": 0,
                        "taxCalculatedAmount": 0
                    }
                ],
                "dish_final_discount_amt": "0",
                "dishOfferAmountValue": 0,
                "alcohol_total": 0,
                "dish_total": 980.327868852459,
                "table_id": "3",
                "order_id": "103170625000217",
                "tableName": "Table-3",
                "zomatogold_per": 0,
                "zomatogold_Amount": 0,
                "coupondiscount_per": 0,
                "discount_per": "0.0",
                "discount_amt": "0.0",
                "cgst_per": 0,
                "cgst_amt": "0",
                "ServiceCharge": 0.5,
                "chargesList": [
                    {
                        "chargesName": "sc",
                        "chargesValue": 0.5
                    }
                ],
                "sgst_amt": "0",
                "sgst_per": 0,
                "orderStatus": "pending",
                "tableAreaName": "Ground-G",
                "orderType": "Dine In",
                "customerLoyality": 0,
                "dish_discount_per": "0.0",
                "dish_discount_amt": 0,
                "dateTime": "2025-06-17 00:34:00",
                "externalOrderId": "NHPF-R18617",
                "offerAmountPercentage": 0,
                "offerAmountValue": 0,
                "offerCouponName": "--",
                "orderDay": "tuesday",
                "order_count": 12,
                "dateTimeForDisplay": "2025-06-17 00:02:22",
                "total_pay_amt": "980.83",
                "serviceChargeAmount": "0.5",
                "reason": "wasted",
                "Discountreason": "",
                "personCountonTable": "2",
                "kotTokenNumber": 2,
                "captainName": "admin",
                "dishList": [
                    {
                        "isClosed": false,
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "dishRemarkPerQty": [],
                        "displayDishName": "",
                        "displayOptionName": "",
                        "total_amt_old": 90.1639344262295,
                        "dish_total_amt_old": 180.327868852459,
                        "dish_total_amt_for_display_old": 220,
                        "total_amt": 90.1639344262295,
                        "dishAmount": 90.1639344262295,
                        "dish_total_amt": 180.327868852459,
                        "dish_total_amt_for_display": 220,
                        "dishAmt": 90.1639344262295,
                        "optionAmount": "",
                        "dish_id": 9814,
                        "dish_name": "2 Phulka + Palak Paneer + Chawal + Chaanch ",
                        "quantity_dish": 2,
                        "quantity_dish_old": 2,
                        "optionId": "",
                        "optionName": "--",
                        "ignoreTax": false,
                        "menu_id_fk": 1127,
                        "recentDishQuantity": 1,
                        "oldrecentDishQuantity": 1,
                        "uniqueDishId": "9814",
                        "catalogueId": "9814",
                        "dishOptionName": "",
                        "dishDiscountAmount": 0,
                        "dishDiscounntPercentage": 0,
                        "dishCalculatedDiscountValue": 0,
                        "dishDiscounntFinalPercentage": 0,
                        "printerId": 40,
                        "printerType": "lan",
                        "printSize": 80,
                        "printCharacters": 300,
                        "printerValue": "192.168.0.100",
                        "kdsFlag": true,
                        "printerModel": "Network",
                        "copyPrinterModel": "",
                        "TotalDishGstTax_per": 22,
                        "DishtaxAfterOffer": 0,
                        "applyOfferFlag": true,
                        "randomDishName": "",
                        "preparedDishQuantity": 0,
                        "dish_amount_with_tax": 110,
                        "total_amt_for_display": 110,
                        "total_amt_for_display_old": 110,
                        "productCode": "0",
                        "dishType": "normal",
                        "remark": "",
                        "taxGroupDetails": {
                            "groupId": 156,
                            "groupname": "VAT(INC)-NEW",
                            "groupValuePer": 22,
                            "taxOptionId": 1,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 199,
                                    "tax": "VAT-N",
                                    "description": null,
                                    "taxValuePer": 22,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        }
                    },
                    {
                        "isClosed": false,
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "dishRemarkPerQty": [],
                        "displayDishName": "",
                        "displayOptionName": "",
                        "total_amt_old": 400,
                        "dish_total_amt_old": 800,
                        "dish_total_amt_for_display_old": 800,
                        "total_amt": 400,
                        "dishAmount": 400,
                        "dish_total_amt": 800,
                        "dish_total_amt_for_display": 800,
                        "dishAmt": 400,
                        "optionAmount": "",
                        "dish_id": 16217,
                        "dish_name": "Alcoholic drinks2",
                        "quantity_dish": 2,
                        "quantity_dish_old": 2,
                        "optionId": "",
                        "optionName": "--",
                        "ignoreTax": true,
                        "menu_id_fk": 1398,
                        "recentDishQuantity": 2,
                        "oldrecentDishQuantity": 2,
                        "uniqueDishId": "16217",
                        "catalogueId": "16217",
                        "dishOptionName": "",
                        "dishDiscountAmount": 0,
                        "dishDiscounntPercentage": 0,
                        "dishCalculatedDiscountValue": 0,
                        "dishDiscounntFinalPercentage": 0,
                        "printerId": 40,
                        "printerType": "lan",
                        "printSize": 80,
                        "printCharacters": 300,
                        "printerValue": "192.168.0.100",
                        "kdsFlag": true,
                        "printerModel": "Network",
                        "copyPrinterModel": "",
                        "TotalDishGstTax_per": 0,
                        "DishtaxAfterOffer": 0,
                        "applyOfferFlag": true,
                        "randomDishName": "",
                        "preparedDishQuantity": 0,
                        "dish_amount_with_tax": 400,
                        "total_amt_for_display": 400,
                        "total_amt_for_display_old": 400,
                        "productCode": "4",
                        "dishType": "normal",
                        "remark": "",
                        "taxGroupDetails": {
                            "groupId": 29,
                            "groupname": "Zero Tax",
                            "groupValuePer": 0,
                            "taxOptionId": 2,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 36,
                                    "tax": "Zero Tax",
                                    "description": null,
                                    "taxValuePer": 0,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        }
                    }
                ],
                "captainid": "69",
                "cancelDishList": [
                    {
                        "dish_name": "ALOO DA PARATHA",
                        "quantity_dish": 1,
                        "dish_id": 11486,
                        "optionId": "",
                        "catalogueId": "11486",
                        "dishOptionName": "",
                        "optionName": "--",
                        "cancelReason": "wasted",
                        "printerId": 40,
                        "printSize": 80,
                        "printerType": "lan",
                        "printCharacters": 300,
                        "printerValue": "192.168.0.100",
                        "kdsFlag": true,
                        "printerModel": "Network",
                        "copyPrinterModel": "",
                        "TotalDishGstTax_per": 5,
                        "applyOfferFlag": true,
                        "DishtaxAfterOffer": 0,
                        "dishAmt": 80,
                        "optionAmount": "",
                        "taxGroupDetails": {
                            "groupId": 104,
                            "groupname": "inclusive",
                            "groupValuePer": 5,
                            "taxOptionId": 2,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 139,
                                    "tax": "inclusive",
                                    "description": null,
                                    "taxValuePer": 5,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        },
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "ncFlag": false,
                        "parkFlag": false,
                        "randomDishName": "",
                        "displayDishName": "",
                        "productCode": "LLL-05",
                        "dishType": "normal"
                    }
                ]
            },
            {
                "printBillcount": 0,
                "round_off_flag": false,
                "dish_total_amt": 80,
                "food_total": 80,
                "ignorTaxValue": 0,
                "ignorTaxValueBackend": 0,
                "taxAmountAfterOffer": 4,
                "taxAmountOnSubtotal": 4,
                "applyDiscountonSubtotalValue": 80,
                "taxList": [
                    {
                        "name": "inclusive",
                        "taxValue": 5,
                        "taxCalculatedAmount": 4
                    }
                ],
                "dish_final_discount_amt": "0",
                "dishOfferAmountValue": 0,
                "alcohol_total": 0,
                "dish_total": 80,
                "table_id": "4",
                "order_id": "104170625002500",
                "tableName": "Table-4",
                "zomatogold_per": 0,
                "zomatogold_Amount": 0,
                "coupondiscount_per": 0,
                "discount_per": "0.0",
                "discount_amt": "0.0",
                "cgst_per": 0,
                "cgst_amt": "0",
                "ServiceCharge": 0.5,
                "chargesList": [
                    {
                        "chargesName": "sc",
                        "chargesValue": 0.5
                    }
                ],
                "sgst_amt": "0",
                "sgst_per": 0,
                "orderStatus": "pending",
                "tableAreaName": "Ground-G",
                "orderType": "Dine In",
                "customerLoyality": 0,
                "dish_discount_per": "0.0",
                "dish_discount_amt": 0,
                "dateTime": "2025-06-17 00:25:04",
                "order_count": 14,
                "externalOrderId": "NHPF-R18619",
                "offerAmountPercentage": 0,
                "offerAmountValue": 0,
                "offerCouponName": "--",
                "orderDay": "tuesday",
                "dateTimeForDisplay": "2025-06-17 00:25:04",
                "total_pay_amt": "80.50",
                "serviceChargeAmount": "0.5",
                "reason": "",
                "Discountreason": "",
                "personCountonTable": "3",
                "kotTokenNumber": 1,
                "captainName": "admin",
                "givenAmount": 0,
                "returnAmount": 0,
                "dishList": [
                    {
                        "isClosed": false,
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "dishRemarkPerQty": [],
                        "displayDishName": "",
                        "total_amt_old": 80,
                        "dish_total_amt_old": 80,
                        "dish_total_amt_for_display_old": 84,
                        "total_amt": 80,
                        "dishAmount": 80,
                        "dish_total_amt": 80,
                        "dish_total_amt_for_display": 84,
                        "dishAmt": 80,
                        "optionAmount": "",
                        "optionDishAmountWithTax": "",
                        "dish_id": 11486,
                        "dish_name": "ALOO DA PARATHA",
                        "quantity_dish": 1,
                        "quantity_dish_old": 1,
                        "optionId": "",
                        "optionName": "--",
                        "ignoreTax": false,
                        "menu_id_fk": 1304,
                        "recentDishQuantity": 1,
                        "oldrecentDishQuantity": 1,
                        "uniqueDishId": "11486",
                        "catalogueId": "11486",
                        "dishOptionName": "",
                        "dishDiscountAmount": 0,
                        "dishDiscounntPercentage": 0,
                        "dishCalculatedDiscountValue": 0,
                        "dishDiscounntFinalPercentage": 0,
                        "printerId": 40,
                        "printerType": "lan",
                        "printSize": 80,
                        "printCharacters": 300,
                        "printerValue": "192.168.0.100",
                        "kdsFlag": true,
                        "printerModel": "Network",
                        "copyPrinterModel": "",
                        "TotalDishGstTax_per": 5,
                        "DishtaxAfterOffer": 0,
                        "applyOfferFlag": true,
                        "randomDishName": "",
                        "preparedDishQuantity": 0,
                        "dish_amount_with_tax": 84,
                        "total_amt_for_display": 84,
                        "total_amt_for_display_old": 84,
                        "parkDishQuantity": 0,
                        "productCode": "LLL-05",
                        "dishType": "normal",
                        "remark": "",
                        "flag": 0,
                        "taxGroupDetails": {
                            "groupId": 104,
                            "groupname": "inclusive",
                            "groupValuePer": 5,
                            "taxOptionId": 2,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 139,
                                    "tax": "inclusive",
                                    "description": null,
                                    "taxValuePer": 5,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        }
                    }
                ],
                "captainid": "69",
                "quickSectionName": null,
                "cust_name": ""
            },
            {
                "printBillcount": 0,
                "round_off_flag": false,
                "dish_total_amt": 2400,
                "food_total": 2400,
                "ignorTaxValue": 2400,
                "ignorTaxValueBackend": 2400,
                "taxAmountAfterOffer": 0,
                "taxAmountOnSubtotal": 0,
                "applyDiscountonSubtotalValue": 2400,
                "taxList": [
                    {
                        "name": "Zero Tax",
                        "taxValue": 0,
                        "taxCalculatedAmount": 0
                    }
                ],
                "dish_final_discount_amt": "0",
                "dishOfferAmountValue": 0,
                "alcohol_total": 0,
                "dish_total": 2400,
                "table_id": "5",
                "order_id": "105170625002516",
                "tableName": "Table-5",
                "zomatogold_per": 0,
                "zomatogold_Amount": 0,
                "coupondiscount_per": 0,
                "discount_per": "0.0",
                "discount_amt": "0.0",
                "cgst_per": 0,
                "cgst_amt": "0",
                "ServiceCharge": 0.5,
                "chargesList": [
                    {
                        "chargesName": "sc",
                        "chargesValue": 0.5
                    }
                ],
                "sgst_amt": "0",
                "sgst_per": 0,
                "orderStatus": "pending",
                "tableAreaName": "Ground-G",
                "orderType": "Dine In",
                "customerLoyality": 0,
                "dish_discount_per": "0.0",
                "dish_discount_amt": 0,
                "dateTime": "2025-06-17 00:32:43",
                "externalOrderId": "NHPF-R18620",
                "offerAmountPercentage": 0,
                "offerAmountValue": 0,
                "offerCouponName": "--",
                "orderDay": "tuesday",
                "order_count": 15,
                "dateTimeForDisplay": "2025-06-17 00:25:19",
                "total_pay_amt": "2400.50",
                "serviceChargeAmount": "0.5",
                "reason": "cancel item",
                "Discountreason": "",
                "personCountonTable": "3",
                "kotTokenNumber": 3,
                "captainName": "admin",
                "dishList": [
                    {
                        "isClosed": false,
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "dishRemarkPerQty": [],
                        "displayDishName": "",
                        "displayOptionName": "",
                        "total_amt_old": 300,
                        "dish_total_amt_old": 2400,
                        "dish_total_amt_for_display_old": 2400,
                        "total_amt": 300,
                        "dishAmount": 300,
                        "dish_total_amt": 2400,
                        "dish_total_amt_for_display": 2400,
                        "dishAmt": 300,
                        "optionAmount": "",
                        "dish_id": 16216,
                        "dish_name": "Alcoholic Drinks (test)",
                        "quantity_dish": 8,
                        "quantity_dish_old": 8,
                        "optionId": "",
                        "optionName": "--",
                        "ignoreTax": true,
                        "menu_id_fk": 1398,
                        "recentDishQuantity": 8,
                        "oldrecentDishQuantity": 8,
                        "uniqueDishId": "16216",
                        "catalogueId": "16216",
                        "dishOptionName": "",
                        "dishDiscountAmount": 0,
                        "dishDiscounntPercentage": 0,
                        "dishCalculatedDiscountValue": 0,
                        "dishDiscounntFinalPercentage": 0,
                        "printerId": 40,
                        "printerType": "lan",
                        "printSize": 80,
                        "printCharacters": 300,
                        "printerValue": "192.168.0.100",
                        "kdsFlag": true,
                        "printerModel": "Network",
                        "copyPrinterModel": "",
                        "TotalDishGstTax_per": 0,
                        "DishtaxAfterOffer": 0,
                        "applyOfferFlag": true,
                        "randomDishName": "",
                        "preparedDishQuantity": 0,
                        "dish_amount_with_tax": 300,
                        "total_amt_for_display": 300,
                        "total_amt_for_display_old": 300,
                        "productCode": "3",
                        "dishType": "normal",
                        "remark": "",
                        "taxGroupDetails": {
                            "groupId": 29,
                            "groupname": "Zero Tax",
                            "groupValuePer": 0,
                            "taxOptionId": 2,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 36,
                                    "tax": "Zero Tax",
                                    "description": null,
                                    "taxValuePer": 0,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        }
                    }
                ],
                "captainid": "69",
                "cancelDishList": [
                    {
                        "dish_name": "Alcoholic Drinks (test)",
                        "quantity_dish": 2,
                        "dish_id": 16216,
                        "optionId": "",
                        "catalogueId": "16216",
                        "dishOptionName": "",
                        "optionName": "--",
                        "cancelReason": "cancel item",
                        "printerId": 40,
                        "printSize": 80,
                        "printerType": "lan",
                        "printCharacters": 300,
                        "printerValue": "192.168.0.100",
                        "kdsFlag": true,
                        "printerModel": "Network",
                        "copyPrinterModel": "",
                        "TotalDishGstTax_per": 0,
                        "applyOfferFlag": true,
                        "DishtaxAfterOffer": 0,
                        "dishAmt": 300,
                        "optionAmount": "",
                        "taxGroupDetails": {
                            "groupId": 29,
                            "groupname": "Zero Tax",
                            "groupValuePer": 0,
                            "taxOptionId": 2,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 36,
                                    "tax": "Zero Tax",
                                    "description": null,
                                    "taxValuePer": 0,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        },
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "ncFlag": false,
                        "parkFlag": false,
                        "randomDishName": "",
                        "displayDishName": "",
                        "productCode": "3",
                        "dishType": "normal"
                    }
                ],
                "cust_name": ""
            },
            {
                "printBillcount": 0,
                "round_off_flag": false,
                "dish_total_amt": 0,
                "food_total": 0,
                "ignorTaxValue": 0,
                "ignorTaxValueBackend": 0,
                "taxAmountAfterOffer": 0,
                "taxAmountOnSubtotal": 0,
                "applyDiscountonSubtotalValue": 0,
                "taxList": [],
                "dish_final_discount_amt": "0",
                "dishOfferAmountValue": 0,
                "alcohol_total": 0,
                "dish_total": 0,
                "table_id": "4",
                "order_id": "104110625131108",
                "tableName": "Table-4",
                "zomatogold_per": 0,
                "zomatogold_Amount": 0,
                "coupondiscount_per": 0,
                "discount_per": "0.0",
                "discount_amt": "0.0",
                "cgst_per": 0,
                "cgst_amt": "0",
                "ServiceCharge": 0.5,
                "chargesList": [
                    {
                        "chargesName": "sc",
                        "chargesValue": 0.5
                    }
                ],
                "sgst_amt": "0",
                "sgst_per": 0,
                "orderStatus": "pending",
                "tableAreaName": "Ground-G",
                "orderType": "Dine In",
                "customerLoyality": 0,
                "dish_discount_per": "0.0",
                "dish_discount_amt": 0,
                "dateTime": "2025-06-11 13:46:31",
                "externalOrderId": "NHPF-R18614",
                "offerAmountPercentage": 0,
                "offerAmountValue": 0,
                "offerCouponName": "--",
                "orderDay": "wednesday",
                "order_count": 9,
                "dateTimeForDisplay": "2025-06-11 13:11:16",
                "total_pay_amt": "0.50",
                "serviceChargeAmount": "0.5",
                "reason": "sa",
                "Discountreason": "",
                "personCountonTable": "2",
                "kotTokenNumber": 2,
                "captainName": "admin",
                "dishList": [],
                "captainid": "69",
                "cancelDishList": [
                    {
                        "dish_name": "2 Phulka + Dal Makhani + Paneer di Sabzi + Raita + Chawal  ",
                        "quantity_dish": 3,
                        "dish_id": 9812,
                        "optionId": "",
                        "catalogueId": "9812",
                        "dishOptionName": "",
                        "optionName": "--",
                        "cancelReason": "sa",
                        "printerId": 40,
                        "printSize": 80,
                        "printerType": "lan",
                        "printCharacters": 300,
                        "printerValue": "192.168.0.100",
                        "kdsFlag": true,
                        "printerModel": "Network",
                        "copyPrinterModel": "",
                        "TotalDishGstTax_per": 22,
                        "applyOfferFlag": true,
                        "DishtaxAfterOffer": 0,
                        "dishAmt": 102.41962423027714,
                        "optionAmount": "",
                        "taxGroupDetails": {
                            "groupId": 156,
                            "groupname": "VAT(INC)-NEW",
                            "groupValuePer": 22,
                            "taxOptionId": 1,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 199,
                                    "tax": "VAT-N",
                                    "description": null,
                                    "taxValuePer": 22,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        },
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "ncFlag": false,
                        "parkFlag": false,
                        "randomDishName": "",
                        "displayDishName": "",
                        "productCode": "0",
                        "dishType": "normal"
                    },
                    {
                        "dish_name": " Orange juice",
                        "quantity_dish": 2,
                        "dish_id": 16329,
                        "optionId": "",
                        "catalogueId": "16329",
                        "dishOptionName": "",
                        "optionName": "--",
                        "cancelReason": "sa",
                        "printerId": 0,
                        "printSize": 0,
                        "printerType": null,
                        "printCharacters": 0,
                        "printerValue": null,
                        "kdsFlag": false,
                        "printerModel": null,
                        "copyPrinterModel": null,
                        "TotalDishGstTax_per": 5,
                        "applyOfferFlag": true,
                        "DishtaxAfterOffer": 0,
                        "dishAmt": 180,
                        "optionAmount": "",
                        "taxGroupDetails": {
                            "groupId": 139,
                            "groupname": "Exl tax",
                            "groupValuePer": 5,
                            "taxOptionId": 2,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 176,
                                    "tax": "EXL tax",
                                    "description": null,
                                    "taxValuePer": 5,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        },
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "ncFlag": false,
                        "parkFlag": false,
                        "randomDishName": "",
                        "displayDishName": " Orange juice",
                        "productCode": "--",
                        "dishType": "normal"
                    },
                    {
                        "dish_name": " Lemonade",
                        "quantity_dish": 3,
                        "dish_id": 16330,
                        "optionId": "",
                        "catalogueId": "16330",
                        "dishOptionName": "",
                        "optionName": "--",
                        "cancelReason": "sa",
                        "printerId": 0,
                        "printSize": 0,
                        "printerType": null,
                        "printCharacters": 0,
                        "printerValue": null,
                        "kdsFlag": false,
                        "printerModel": null,
                        "copyPrinterModel": null,
                        "TotalDishGstTax_per": 5,
                        "applyOfferFlag": false,
                        "DishtaxAfterOffer": 0,
                        "dishAmt": 190.47619047619048,
                        "optionAmount": "",
                        "taxGroupDetails": {
                            "groupId": 155,
                            "groupname": "Gst(Inc)-New",
                            "groupValuePer": 5,
                            "taxOptionId": 1,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 197,
                                    "tax": "CGST -N",
                                    "description": null,
                                    "taxValuePer": 2.5,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                },
                                {
                                    "taxId": 198,
                                    "tax": "SGST-N",
                                    "description": null,
                                    "taxValuePer": 2.5,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        },
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "ncFlag": false,
                        "parkFlag": false,
                        "randomDishName": "",
                        "displayDishName": " Lemonade",
                        "productCode": "--",
                        "dishType": "normal"
                    }
                ]
            },
            {
                "printBillcount": 0,
                "round_off_flag": false,
                "dish_total_amt": 0,
                "food_total": 0,
                "ignorTaxValue": 0,
                "ignorTaxValueBackend": 0,
                "taxAmountAfterOffer": 0,
                "taxAmountOnSubtotal": 0,
                "applyDiscountonSubtotalValue": 0,
                "taxList": [],
                "dish_final_discount_amt": "0",
                "dishOfferAmountValue": 0,
                "alcohol_total": 0,
                "dish_total": 0,
                "table_id": "1001",
                "order_id": "1001110625134633",
                "zomatogold_per": 0,
                "zomatogold_Amount": 0,
                "coupondiscount_per": 0,
                "discount_per": "0.0",
                "discount_amt": "0.0",
                "cgst_per": 0,
                "cgst_amt": "0",
                "ServiceCharge": 0,
                "chargesList": [
                    {
                        "chargesName": "Take away",
                        "chargesValue": 0,
                        "chargesTax": 5
                    }
                ],
                "sgst_amt": "0",
                "sgst_per": 0,
                "orderStatus": "pending",
                "tableAreaName": "Take Away",
                "orderType": "Take Away",
                "customerLoyality": 0,
                "dish_discount_per": "0.0",
                "dish_discount_amt": 0,
                "dateTime": "2025-06-11 13:46:52",
                "externalOrderId": "NHPF-R18615",
                "offerAmountPercentage": 0,
                "offerAmountValue": 0,
                "offerCouponName": "--",
                "orderDay": "wednesday",
                "order_count": 10,
                "dateTimeForDisplay": "2025-06-11 13:46:39",
                "total_pay_amt": "0.00",
                "serviceChargeAmount": "0",
                "reason": "zxz",
                "Discountreason": "",
                "kotTokenNumber": 2,
                "captainName": "admin",
                "dishList": [],
                "cancelDishList": [
                    {
                        "dish_name": "Alcoholic drinks2",
                        "quantity_dish": 2,
                        "dish_id": 16217,
                        "optionId": "",
                        "catalogueId": "16217",
                        "dishOptionName": "",
                        "optionName": "--",
                        "cancelReason": "zxz",
                        "printerId": 40,
                        "printSize": 80,
                        "printerType": "lan",
                        "printCharacters": 300,
                        "printerValue": "192.168.0.100",
                        "kdsFlag": true,
                        "printerModel": "Network",
                        "copyPrinterModel": "",
                        "TotalDishGstTax_per": 0,
                        "applyOfferFlag": true,
                        "DishtaxAfterOffer": 0,
                        "dishAmt": 400,
                        "optionAmount": "",
                        "taxGroupDetails": {
                            "groupId": 29,
                            "groupname": "Zero Tax",
                            "groupValuePer": 0,
                            "taxOptionId": 2,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 36,
                                    "tax": "Zero Tax",
                                    "description": null,
                                    "taxValuePer": 0,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        },
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "ncFlag": false,
                        "parkFlag": false,
                        "randomDishName": "",
                        "displayDishName": "",
                        "productCode": "4",
                        "dishType": "normal"
                    },
                    {
                        "dish_name": "ALOO DA PARATHA",
                        "quantity_dish": 3,
                        "dish_id": 11486,
                        "optionId": "",
                        "catalogueId": "11486",
                        "dishOptionName": "",
                        "optionName": "--",
                        "cancelReason": "zxz",
                        "printerId": 40,
                        "printSize": 80,
                        "printerType": "lan",
                        "printCharacters": 300,
                        "printerValue": "192.168.0.100",
                        "kdsFlag": true,
                        "printerModel": "Network",
                        "copyPrinterModel": "",
                        "TotalDishGstTax_per": 5,
                        "applyOfferFlag": true,
                        "DishtaxAfterOffer": 0,
                        "dishAmt": 80,
                        "optionAmount": "",
                        "taxGroupDetails": {
                            "groupId": 104,
                            "groupname": "inclusive",
                            "groupValuePer": 5,
                            "taxOptionId": 2,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 139,
                                    "tax": "inclusive",
                                    "description": null,
                                    "taxValuePer": 5,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        },
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "ncFlag": false,
                        "parkFlag": false,
                        "randomDishName": "",
                        "displayDishName": "",
                        "productCode": "LLL-05",
                        "dishType": "normal"
                    },
                    {
                        "dish_name": "Alcoholic Drinks (test)",
                        "quantity_dish": 1,
                        "dish_id": 16216,
                        "optionId": "",
                        "catalogueId": "16216",
                        "dishOptionName": "",
                        "optionName": "--",
                        "cancelReason": "zxz",
                        "printerId": 40,
                        "printSize": 80,
                        "printerType": "lan",
                        "printCharacters": 300,
                        "printerValue": "192.168.0.100",
                        "kdsFlag": true,
                        "printerModel": "Network",
                        "copyPrinterModel": "",
                        "TotalDishGstTax_per": 0,
                        "applyOfferFlag": true,
                        "DishtaxAfterOffer": 0,
                        "dishAmt": 300,
                        "optionAmount": "",
                        "taxGroupDetails": {
                            "groupId": 29,
                            "groupname": "Zero Tax",
                            "groupValuePer": 0,
                            "taxOptionId": 2,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 36,
                                    "tax": "Zero Tax",
                                    "description": null,
                                    "taxValuePer": 0,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        },
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "ncFlag": false,
                        "parkFlag": false,
                        "randomDishName": "",
                        "displayDishName": "",
                        "productCode": "3",
                        "dishType": "normal"
                    },
                    {
                        "dish_name": "2 Phulka + Dal Makhani + Paneer di Sabzi + Raita + Chawal  ",
                        "quantity_dish": 2,
                        "dish_id": 9812,
                        "optionId": "",
                        "catalogueId": "9812",
                        "dishOptionName": "",
                        "optionName": "--",
                        "cancelReason": "zxz",
                        "printerId": 40,
                        "printSize": 80,
                        "printerType": "lan",
                        "printCharacters": 300,
                        "printerValue": "192.168.0.100",
                        "kdsFlag": true,
                        "printerModel": "Network",
                        "copyPrinterModel": "",
                        "TotalDishGstTax_per": 22,
                        "applyOfferFlag": true,
                        "DishtaxAfterOffer": 0,
                        "dishAmt": 102.41962423027714,
                        "optionAmount": "",
                        "taxGroupDetails": {
                            "groupId": 156,
                            "groupname": "VAT(INC)-NEW",
                            "groupValuePer": 22,
                            "taxOptionId": 1,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 199,
                                    "tax": "VAT-N",
                                    "description": null,
                                    "taxValuePer": 22,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        },
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "ncFlag": false,
                        "parkFlag": false,
                        "randomDishName": "",
                        "displayDishName": "",
                        "productCode": "0",
                        "dishType": "normal"
                    },
                    {
                        "dish_name": " Orange juice",
                        "quantity_dish": 3,
                        "dish_id": 16329,
                        "optionId": "",
                        "catalogueId": "16329",
                        "dishOptionName": "",
                        "optionName": "--",
                        "cancelReason": "zxz",
                        "printerId": 0,
                        "printSize": 0,
                        "printerType": null,
                        "printCharacters": 0,
                        "printerValue": null,
                        "kdsFlag": false,
                        "printerModel": null,
                        "copyPrinterModel": null,
                        "TotalDishGstTax_per": 5,
                        "applyOfferFlag": true,
                        "DishtaxAfterOffer": 0,
                        "dishAmt": 180,
                        "optionAmount": "",
                        "taxGroupDetails": {
                            "groupId": 139,
                            "groupname": "Exl tax",
                            "groupValuePer": 5,
                            "taxOptionId": 2,
                            "taxOption": null,
                            "taxList": [
                                {
                                    "taxId": 176,
                                    "tax": "EXL tax",
                                    "description": null,
                                    "taxValuePer": 5,
                                    "valid": null,
                                    "taxGroupId": 0,
                                    "existsOnGroup": false,
                                    "hotelId": 0,
                                    "masterTaxId": 0,
                                    "taxName": null
                                }
                            ],
                            "valid": null,
                            "taxAmountOnTotal": 0,
                            "taxAmountAfterOffer": 0,
                            "hotelId": 0
                        },
                        "sweetShopFlag": false,
                        "unitName": null,
                        "applyChargeFlag": true,
                        "ncFlag": false,
                        "parkFlag": false,
                        "randomDishName": "",
                        "displayDishName": " Orange juice",
                        "productCode": "--",
                        "dishType": "normal"
                    }
                ]
            }
        ];
    };
    KdscocketclientComponent.ctorParameters = function () { return [
        { type: _service_socketconfig_service__WEBPACK_IMPORTED_MODULE_2__["SocketconfigService"] },
        { type: _angular_mdl_core__WEBPACK_IMPORTED_MODULE_3__["MdlSnackbarService"] }
    ]; };
    KdscocketclientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-kdscocketclient",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kdscocketclient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kdscocketclient/kdscocketclient.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kdscocketclient.component.scss */ "./src/app/kdscocketclient/kdscocketclient.component.scss")).default]
        })
    ], KdscocketclientComponent);
    return KdscocketclientComponent;
}());



/***/ }),

/***/ "./src/app/onlineorders/onlineorders.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/onlineorders/onlineorders.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**scss for kds client page...*/\n.mdl-grid {\n  padding: 0 !important;\n  z-index: 1;\n}\n.mdl-cell {\n  padding: 25px 0;\n  text-align: center;\n  color: #424242;\n  font-weight: bold;\n}\n.mdl-card {\n  border-bottom: 1px solid red;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.mdl-card__actions {\n  height: auto;\n  font-size: 12px;\n}\n.remark-box ::before {\n  content: \"•\";\n  font-size: 25px;\n  display: inline-block;\n  position: relative;\n  top: auto;\n  left: 216px;\n  bottom: 21px;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.remark {\n  color: #d53232;\n  font-weight: bold;\n  display: inline;\n  line-height: 18px;\n}\n.remark-delivered {\n  color: #242424;\n  font-weight: bold;\n  display: inline;\n  line-height: 18px;\n}\n.normal-check {\n  position: relative;\n  bottom: 28px;\n  left: 236px;\n}\n.rmk-check {\n  position: relative;\n  bottom: 48px;\n  left: 236px;\n}\n.delivered-check {\n  position: absolute;\n  top: 20px;\n  left: 262px;\n}\n.mdl-card-dish {\n  position: relative;\n  margin-top: -20px;\n  line-height: 30px;\n}\n.cancell {\n  text-decoration: line-through;\n  -webkit-text-decoration-color: #f02805;\n          text-decoration-color: #f02805;\n  color: red;\n}\n.my-class1 {\n  text-decoration: line-through;\n  color: white;\n  -webkit-text-decoration-color: #ff3131;\n          text-decoration-color: #ff3131;\n  background: #ffebeb;\n  border-radius: 10px;\n  color: black;\n  font-weight: bold;\n  top: 0;\n}\n.my-class1 .remark {\n  color: #395870;\n}\n.my-class3 {\n  text-decoration: none;\n}\n.my-class2 {\n  display: initial;\n  color: black;\n  font-weight: bold;\n}\nmdl-chip {\n  width: 150px !important;\n  color: black;\n}\nmdl-chip-contact {\n  float: left;\n}\n.mdl-chip {\n  height: 32px;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  line-height: 35px;\n  padding: 0 12px;\n  border: 0;\n  border-radius: 16px;\n  background-color: white;\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.87);\n  margin: 2px 0;\n  font-size: 0;\n  white-space: nowrap;\n}\n.mdl-chip {\n  height: 36px;\n  background-color: none;\n  border: 1px solid #ffc7c7;\n  border-bottom: 1px solid #ffc7c7 !important;\n}\n.mdl-chip__contact {\n  height: 32px;\n  width: 32px;\n  border-radius: 0px;\n  margin-right: 8px;\n  font-size: 16px;\n  line-height: 45px;\n  color: #ff2b2b;\n  border-right: 1px solid #ff2323;\n  /* opacity: 0.8; */\n}\ndiv.blue {\n  float: right;\n  height: 35px;\n  line-height: 50px;\n  font-size: 15px;\n  margin: 0;\n  padding: 0;\n  left: 48px;\n  top: -30px;\n  width: 170px;\n}\n#abi1 {\n  width: 245px;\n  padding: 1px 0 1px 0px;\n  background: #f44336;\n  color: #fff;\n  word-wrap: break-word;\n  position: relative;\n  z-index: 2;\n  font-size: 20px;\n}\n#abi1:after {\n  content: \"\";\n  position: absolute;\n  left: -10px;\n  top: 0px;\n  width: 0;\n  height: 0;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid #395870;\n}\n.numberCircle {\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 15px;\n  display: inline-box;\n  border: 2px solid #395870;\n  margin-bottom: -30px;\n}\n.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.hov:hover {\n  border-radius: 50%;\n  border: 1px solid;\n  padding: 2px;\n  font-size: 21px;\n  font-style: normal;\n  background: none;\n  text-align: center;\n  color: #107d13;\n  font-weight: bold;\n}\n.verticalhorizontal {\n  height: 300px;\n  text-align: center;\n  width: 300px;\n  vertical-align: middle;\n  margin: 10% 0 0 40%;\n}\n.singlebutton {\n  color: white !important;\n  font: bold;\n  background: black !important;\n}\n.singlebutton:hover {\n  border-bottom: 2px solid red;\n}\n.mdl-chip {\n  border-bottom: 2px solid red;\n}\n#delivered {\n  color: #395870;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n#setdish {\n  margin-right: 50px;\n}\n.tableback {\n  background: repeating-linear-gradient(45deg, slategrey, transparent 100px);\n}\n.allcomplted:hover {\n  border-bottom: 2px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25saW5lb3JkZXJzL29ubGluZW9yZGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb25saW5lb3JkZXJzL0M6XFxQcm9qZWN0c1xcRGlnaXJlc3Ryb1xcZGlnaXJlc3Ryby1rZHMvc3JjXFxhcHBcXG9ubGluZW9yZGVyc1xcb25saW5lb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQiwrQkFBQTtBQUNBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FERUY7QUNDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBREVGO0FDQ0E7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QURFRjtBQ0FFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QURFSjtBQ0VBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtBRENGO0FDQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURFRjtBQ0FBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FER0Y7QUNEQTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURHRjtBQ0FBO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBREVGO0FDQUE7RUFFRSxrQkFBQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FERUo7QUNDQTtFQUVFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRENGO0FDRUE7RUFDRSw2QkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxVQUFBO0FEQ0Y7QUNJQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsTUFBQTtBRERGO0FDR0U7RUFDRSxjQUFBO0FEREo7QUNLQTtFQUNFLHFCQUFBO0FERkY7QUNLQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FERkY7QUNLQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBREZGO0FDR0U7RUFDRSxXQUFBO0FEREo7QUNLQTtFQUNFLFlBQUE7RUFDQSx1REFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURGRjtBQ01BO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtBREhGO0FDS0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBREZGO0FDTUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FESEY7QUNNQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBRUEsZUFBQTtBRE5GO0FDUUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEscUNBQUE7RUFDQSxnQ0FBQTtBRE5GO0FDU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QURQRjtBQ1VBO0VBRUUsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FEUkY7QUNXQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRFJGO0FDV0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRFJGO0FDWUE7RUFFRSx1QkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtBRFZGO0FDWUU7RUFDRSw0QkFBQTtBRFZKO0FDZUE7RUFDRSw0QkFBQTtBRFpGO0FDaUJBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0FEZEE7QUNpQkE7RUFDRSxrQkFBQTtBRGRGO0FDZ0JBO0VBQ0UsMEVBQUE7QURiRjtBQ2tCRTtFQUNFLDRCQUFBO0FEZkoiLCJmaWxlIjoic3JjL2FwcC9vbmxpbmVvcmRlcnMvb25saW5lb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqc2NzcyBmb3Iga2RzIGNsaWVudCBwYWdlLi4uKi9cbi5tZGwtZ3JpZCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTtcbn1cblxuLm1kbC1jZWxsIHtcbiAgcGFkZGluZzogMjVweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDI0MjQyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1kbC1jYXJkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1kbC1jYXJkX19hY3Rpb25zIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yZW1hcmstYm94IDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKJcIjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiBhdXRvO1xuICBsZWZ0OiAyMTZweDtcbiAgYm90dG9tOiAyMXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4ucmVtYXJrIHtcbiAgY29sb3I6ICNkNTMyMzI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ucmVtYXJrLWRlbGl2ZXJlZCB7XG4gIGNvbG9yOiAjMjQyNDI0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLm5vcm1hbC1jaGVjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAyOHB4O1xuICBsZWZ0OiAyMzZweDtcbn1cblxuLnJtay1jaGVjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiA0OHB4O1xuICBsZWZ0OiAyMzZweDtcbn1cblxuLmRlbGl2ZXJlZC1jaGVjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAyNjJweDtcbn1cblxuLm1kbC1jYXJkLWRpc2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLmNhbmNlbGwge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZjAyODA1O1xuICBjb2xvcjogcmVkO1xufVxuXG4ubXktY2xhc3MxIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMTMxO1xuICBiYWNrZ3JvdW5kOiAjZmZlYmViO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0b3A6IDA7XG59XG4ubXktY2xhc3MxIC5yZW1hcmsge1xuICBjb2xvcjogIzM5NTg3MDtcbn1cblxuLm15LWNsYXNzMyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm15LWNsYXNzMiB7XG4gIGRpc3BsYXk6IGluaXRpYWw7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm1kbC1jaGlwIHtcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbm1kbC1jaGlwLWNvbnRhY3Qge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1kbC1jaGlwIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMCAxMnB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBtYXJnaW46IDJweCAwO1xuICBmb250LXNpemU6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5tZGwtY2hpcCB7XG4gIGhlaWdodDogMzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmYzdjNztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmM3YzcgIWltcG9ydGFudDtcbn1cblxuLm1kbC1jaGlwX19jb250YWN0IHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgY29sb3I6ICNmZjJiMmI7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZjIzMjM7XG4gIC8qIG9wYWNpdHk6IDAuODsgKi9cbn1cblxuZGl2LmJsdWUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsZWZ0OiA0OHB4O1xuICB0b3A6IC0zMHB4O1xuICB3aWR0aDogMTcwcHg7XG59XG5cbiNhYmkxIHtcbiAgd2lkdGg6IDI0NXB4O1xuICBwYWRkaW5nOiAxcHggMCAxcHggMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xuICBjb2xvcjogI2ZmZjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2FiaTE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICMzOTU4NzA7XG59XG5cbi5udW1iZXJDaXJjbGUge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJveDtcbiAgYm9yZGVyOiAycHggc29saWQgIzM5NTg3MDtcbiAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XG59XG5cbi50ZXh0LWVsbGlwc2lzIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5ob3Y6aG92ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBwYWRkaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMTA3ZDEzO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZlcnRpY2FsaG9yaXpvbnRhbCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDMwMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDEwJSAwIDAgNDAlO1xufVxuXG4uc2luZ2xlYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG4uc2luZ2xlYnV0dG9uOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcbn1cblxuLm1kbC1jaGlwIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcbn1cblxuI2RlbGl2ZXJlZCB7XG4gIGNvbG9yOiAjMzk1ODcwO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuI3NldGRpc2gge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbi50YWJsZWJhY2sge1xuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBzbGF0ZWdyZXksIHRyYW5zcGFyZW50IDEwMHB4KTtcbn1cblxuLmFsbGNvbXBsdGVkOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcbn0iLCIvKipzY3NzIGZvciBrZHMgY2xpZW50IHBhZ2UuLi4qL1xyXG4ubWRsLWdyaWQge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubWRsLWNlbGwge1xyXG4gIHBhZGRpbmc6IDI1cHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM0MjQyNDI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5tZGwtY2FyZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICZfX2FjdGlvbnMge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJlbWFyay1ib3ggOjpiZWZvcmV7XHJcbiAgY29udGVudDogXCLigKJcIjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IGF1dG87XHJcbiAgbGVmdDogMjE2cHg7XHJcbiAgYm90dG9tOiAyMXB4O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG4ucmVtYXJrIHtcclxuICBjb2xvcjogI2Q1MzIzMjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuLnJlbWFyay1kZWxpdmVyZWQge1xyXG4gIGNvbG9yOiAjMjQyNDI0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG4ubm9ybWFsLWNoZWNrXHJcbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAyOHB4O1xyXG4gIGxlZnQ6IDIzNnB4O1xyXG59XHJcblxyXG4ucm1rLWNoZWNrXHJcbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiA0OHB4O1xyXG4gIGxlZnQ6IDIzNnB4O1xyXG59XHJcbi5kZWxpdmVyZWQtY2hlY2tcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGxlZnQ6IDI2MnB4O1xyXG59XHJcblxyXG4ubWRsLWNhcmQtZGlzaFxyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY2FuY2VsbCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZ2IoMjQwLCA0MCwgNSk7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcblxyXG4ubXktY2xhc3MxIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmYzMTMxO1xyXG4gIGJhY2tncm91bmQ6ICNmZmViZWI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdG9wOiAwO1xyXG4gIC8vIGRpc3BsYXk6IG5vbmU7XHJcbiAgLnJlbWFya3tcclxuICAgIGNvbG9yOiMzOTU4NzA7XHJcbiAgfVxyXG59XHJcblxyXG4ubXktY2xhc3MzIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5teS1jbGFzczIge1xyXG4gIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5tZGwtY2hpcCB7XHJcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gICYtY29udGFjdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbi5tZGwtY2hpcCB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLFwiSGVsdmV0aWNhXCIsXCJBcmlhbFwiLHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZzogMCAxMnB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG4gIG1hcmdpbjogMnB4IDA7XHJcbiAgZm9udC1zaXplOiAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcblxyXG4ubWRsLWNoaXAge1xyXG4gIGhlaWdodDogMzZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmM3Yzc7XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2ZmYzdjNyAhaW1wb3J0YW50O1xyXG59XHJcbi5tZGwtY2hpcF9fY29udGFjdCB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgY29sb3I6ICNmZjJiMmI7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmMjMyMztcclxuICAvKiBvcGFjaXR5OiAwLjg7ICovXHJcbn1cclxuXHJcblxyXG5kaXYuYmx1ZSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGVmdDogNDhweDtcclxuICB0b3A6IC0zMHB4O1xyXG4gIHdpZHRoOiAxNzBweDtcclxufVxyXG5cclxuI2FiaTEge1xyXG4gIHdpZHRoOiAyNDVweDtcclxuICBwYWRkaW5nOiAxcHggMCAxcHggMHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6ICMzOTU4NzA7XHJcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcclxuICBcclxuICBjb2xvcjogI2ZmZjtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcblxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4jYWJpMTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTEwcHg7XHJcbiAgdG9wOiAwcHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIC8vIGJvcmRlci10b3A6IDExcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgIzM5NTg3MDtcclxufVxyXG5cclxuLm51bWJlckNpcmNsZSB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIC8vIG1hcmdpbjogLTE1cHggMjVweCAtMjNweCAtMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYm94O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzOTU4NzA7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWVsbGlwc2lzXHJcbntcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5ob3Y6aG92ZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzEwN2QxMztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnZlcnRpY2FsaG9yaXpvbnRhbCB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luOiAxMCUgMCAwIDQwJTtcclxufVxyXG5cclxuXHJcbi5zaW5nbGVidXR0b25cclxue1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZDogIGJsYWNrICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6aG92ZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1kbC1jaGlwe1xyXG4gIGJvcmRlci1ib3R0b206MnB4IHNvbGlkIHJlZDtcclxuICAvLyAmOmhvdmVye1xyXG4gIC8vICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgcmVkO1xyXG4gIC8vIH1cclxufVxyXG4jZGVsaXZlcmVke1xyXG5jb2xvcjogIzM5NTg3MDtcclxuZm9udC1mYW1pbHk6ICAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG4jc2V0ZGlzaHtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuLnRhYmxlYmFja3tcclxuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBzbGF0ZWdyZXksIHRyYW5zcGFyZW50IDEwMHB4KTtcclxufVxyXG5cclxuXHJcbi5hbGxjb21wbHRlZHtcclxuICAmOmhvdmVye1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgcmVkO1xyXG5cclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/onlineorders/onlineorders.component.ts":
/*!********************************************************!*\
  !*** ./src/app/onlineorders/onlineorders.component.ts ***!
  \********************************************************/
/*! exports provided: OnlineordersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineordersComponent", function() { return OnlineordersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_socketconfig_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/socketconfig.service */ "./src/app/service/socketconfig.service.ts");
/* harmony import */ var _angular_mdl_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-mdl/core */ "./node_modules/@angular-mdl/core/fesm5/angular-mdl-core.js");




var OnlineordersComponent = /** @class */ (function () {
    function OnlineordersComponent(SocketconfigService, mdlSnackbarService) {
        // let ipAddress = "192.168.1.100";
        // let ipAddress = "192.168.225.110";
        this.SocketconfigService = SocketconfigService;
        this.mdlSnackbarService = mdlSnackbarService;
        this.KotorderList = [];
        this.orderList = [];
        this.myDate = new Date();
        this.math = Math;
        this.audio = new Audio();
        this.time = new Date();
        this.checkdishList = [];
        this.selectedCategoriesList = [];
        this.map = new Map();
        this.newMap = new Map();
        this.uniqueCountList = [];
        this.count = 0;
        this.selectedKdsType = '';
        this.cancelDishList = [];
        this.singleList = [];
        // let ipAddress = SocketconfigService.getIpaddress();
        // console.log("SocketconfigService.getIpaddress()", ipAddress);
        // let socketServerUrl = `http://${ipAddress}:7000`;
        // //   this.socket = io("http://${ipAddress}:7000");
        // this.socket = io(socketServerUrl);
        this.socket = SocketconfigService.getSocketConnection();
        console.log("this.socket", this.socket);
        this.checkifrecordsexist();
        this.socket.off("Check-Exist-Order-response");
        this.socket.off("kot-orders-response");
        this.socket.off("Dishes-Ready-response");
        this.socket.off("Kot-Accepted-response");
        this.socket.off("dish-prepared-response");
        this.socket.off("update-kds-saved-orders-response");
        this.getSocketResponse();
        this.getUpdateSavedOrdersResponse();
        this.startTime(); //this will start the Timer
    }
    OnlineordersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cancelDishList = [];
        this.selectedCategoriesList = localStorage.getItem('selectedCategoriesList') != null ? JSON.parse(localStorage.getItem('selectedCategoriesList')) : [];
        this.selectedKdsType = localStorage.getItem('selectedKdsType') != null ? localStorage.getItem('selectedKdsType') : '';
        console.log("selectedKdsType-", this.selectedKdsType);
        /** below code snippet will catch the respose data from the Server and push into the KotorderList*/
        if (this.KotorderList.length != 0) {
            console.log("entered");
            var _loop_1 = function (i) {
                var e_1, _a, e_2, _b, e_3, _c;
                this_1.KotorderList[i].dateTimeForDisplay = new Date(this_1.KotorderList[i].dateTimeForDisplay);
                if (this_1.KotorderList[i].table_id === "1001") {
                    this_1.KotorderList[i].tableName = "Take Away";
                }
                if (this_1.KotorderList[i].table_id === "1002") {
                    this_1.KotorderList[i].tableName = "Door Delivery";
                }
                if (this_1.KotorderList[i].table_id === "1004") {
                    this_1.KotorderList[i].tableName = "QSR";
                }
                var _loop_2 = function (dish) {
                    var flag = this_1.selectedCategoriesList.some(function (item) { return item === dish.menu_id_fk; });
                    dish.showCategoryFlag = flag;
                };
                try {
                    // let index1 =  this.KotorderList[i].dishList.findIndex(x=>x.kdsFlag === false)
                    // console.log("index1",index1)
                    // if(index1 >-1){
                    //   this.KotorderList[i].dishList.splice(index1,1);
                    // }
                    // Show only selected category dish
                    for (var _d = (e_1 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this_1.KotorderList[i].dishList)), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var dish = _e.value;
                        _loop_2(dish);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                // Remove KOT after all dishes have been delivered or prepared.
                if (this_1.selectedKdsType === "kds" || this_1.selectedKdsType === "expo") {
                    var tempflag = false;
                    this_1.KotorderList[i].showflag = false;
                    try {
                        for (var _f = (e_2 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this_1.KotorderList[i].dishList)), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var dish = _g.value;
                            if (dish.recentDishQuantity !== 0 && dish.showCategoryFlag == true && dish.kdsFlag === true) {
                                tempflag = true;
                                // break; 
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    if (tempflag) {
                        this_1.KotorderList[i].showflag = true;
                    }
                }
                if (this_1.selectedKdsType === "prep") {
                    var tempflag = false;
                    this_1.KotorderList[i].showflag = false;
                    try {
                        for (var _h = (e_3 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this_1.KotorderList[i].dishList)), _j = _h.next(); !_j.done; _j = _h.next()) {
                            var dish = _j.value;
                            if (dish.recentDishQuantity !== 0 && dish.showCategoryFlag == true && dish.kdsFlag === true && dish.preparedDishQuantity != dish.quantity_dish) {
                                tempflag = true;
                                // break; 
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    if (tempflag) {
                        this_1.KotorderList[i].showflag = true;
                    }
                }
                // Store Take Away, Door Delivery & QSR Orders to KDS for close order
                if (this_1.KotorderList[i].table_id === "1001" || this_1.KotorderList[i].table_id === "1002" || this_1.KotorderList[i].table_id === "1004") {
                    if (this_1.KotorderList[i].showflag === false) {
                        this_1.deleteLocalStorageOrder(this_1.KotorderList[i].order_id);
                    }
                    else {
                        var savedOrders = localStorage.getItem('savedOrders') != null ? JSON.parse(localStorage.getItem('savedOrders')) : [];
                        var savedOrderIndex = savedOrders.findIndex(function (order) { return order.order_id === _this.KotorderList[i].order_id; });
                        if (savedOrderIndex !== -1) {
                            savedOrders[savedOrderIndex] = this_1.KotorderList[i];
                        }
                        else {
                            savedOrders.push(this_1.KotorderList[i]);
                        }
                        localStorage.setItem('savedOrders', JSON.stringify(savedOrders));
                    }
                }
            };
            var this_1 = this;
            // this.KotorderList = this.KotorderList;
            for (var i = 0; i < this.KotorderList.length; i++) {
                _loop_1(i);
            }
            this.KotorderList.sort(function (a, b) {
                var orderA = a.externalOrderId.toUpperCase();
                var orderB = b.externalOrderId.toUpperCase();
                if (orderA < orderB) {
                    return 1;
                }
                if (orderA > orderB) {
                    return -1;
                }
                return 0;
            });
            console.log("this.KotorderList -", this.KotorderList);
        }
        // this.list = [];
        // this.secondlist = [];
        // /** below code snippet will catch the respose data from the Server and push into the KotorderList*/
        // if (this.KotorderList.length != 0) {
        //   for (let i = 0; i < this.KotorderList.length; i++) {
        //     for (let j = 0; j < this.KotorderList[i].kotforkdsList.length; j++) {
        //       this.list.push(this.KotorderList[i].kotforkdsList[j]);
        //     }
        //   }
        // }
    };
    /**
     * method is to get response from server ('kot-orders-response' is Listener)
     */
    OnlineordersComponent.prototype.getSocketResponse = function () {
        var _this = this;
        this.socket.on("kot-orders-response", function (resposedata) {
            _this.playSound();
            console.log("resposedata", resposedata);
            _this.KotorderList = [];
            _this.KotorderList = resposedata;
            // Store Take Away, Door Delivery & QSR Orders to KDS for close order
            _this.addOrdersFromLocalStorage();
            _this.ngOnInit();
        });
    };
    /**
     * method is to send respose to server for order accepted intimation
     * @param Kotorder
     */
    OnlineordersComponent.prototype.orderaccepted = function (Kotorder) {
        var kotacceptobject = {
            table_id: Kotorder.table_id,
            order_Id: Kotorder.order_id
        };
        this.socket.emit("Kot-Accepted", kotacceptobject);
    };
    /**
     *method is to send the dishes completed response to the Server
     * @param Kotorder
     */
    OnlineordersComponent.prototype.dishescompleted = function (Kotorder) {
        if (this.socket.connected) {
            this.compareList = [];
            this.orderList = Kotorder.dishList;
            console.log("this.KotorderList.....", this.orderList);
            for (var i = 0; i < this.orderList.length; i++) {
                if (this.orderList[i].showCategoryFlag === true) {
                    this.compareList.push({
                        dish_id: this.orderList[i].dish_id,
                        dish_name: this.orderList[i].dish_name,
                        count: this.orderList[i].recentDishQuantity,
                        optionId: this.orderList[i].optionId,
                        uniqueDish_Id: this.orderList[i].uniqueDishId,
                        // recentDishQuantity: 0,
                        kdsrecentDishQuantity: this.orderList[i].recentDishQuantity,
                    });
                }
            }
            var finalObject = {
                compareList: this.compareList,
                Order_Id: Kotorder.order_id,
                externalOrder_Id: Kotorder.externalOrderId,
                table_id: Kotorder.table_id,
                completed_Time: new Date(),
                orderStatus: Kotorder.orderStatus,
                tableStatusId: 2,
                message: "Dishes are Ready.."
            };
            console.log("finalObject -", finalObject);
            // this.pauseTimer();
            this.socket.emit("Dishes-Ready", finalObject);
            // Store Take Away, Door Delivery & QSR Orders to KDS for close order
            if (Kotorder.table_id === "1001" || Kotorder.table_id === "1002" || Kotorder.table_id === "1004") {
                this.changestatusOrder(finalObject);
                this.sendUpdatedSavedOrders();
            }
            this.showSnackbar();
            this.ngOnInit();
        }
        else {
            this.mdlSnackbarService.showSnackbar({
                message: "KDS Disconnected! Please check POS or Network Connection"
            });
        }
    };
    OnlineordersComponent.prototype.showSnackbar = function () {
        this.mdlSnackbarService.showSnackbar({
            message: "Order Inserted successfully.."
        });
    };
    /**
     * Method is to start the Timer
     */
    OnlineordersComponent.prototype.startTime = function () {
        var _this = this;
        this.interval = setInterval(function () {
            //replaced function() by ()=>
            _this.myDate = new Date();
        }, 1000);
    };
    OnlineordersComponent.prototype.playSound = function () {
        console.log("Ring");
        this.audio.src = "assets/audio/just-saying.mp3";
        this.audio.load();
        this.audio.play();
    };
    OnlineordersComponent.prototype.pauseTimer = function () {
        clearInterval(this.interval);
    };
    OnlineordersComponent.prototype.checkifrecordsexist = function () {
        console.log("methd calleds");
        this.socket.emit("Check-Exist-Order");
    };
    OnlineordersComponent.prototype.getresposefromserver = function () {
        var _this = this;
        this.socket.on("Check-Exist-Order-response", function (resposedata1111111) {
            _this.playSound();
            console.log("resposedata1111111", resposedata1111111);
            _this.KotorderList = [];
            _this.KotorderList = resposedata1111111;
            _this.ngOnInit();
        });
    };
    OnlineordersComponent.prototype.removeOrderFromNEWMAPVALUEStorage = function (orderId) {
        var availbleDishList = new Map();
        availbleDishList = new Map(JSON.parse(localStorage.getItem("NEW")));
        availbleDishList.delete(orderId);
        localStorage.setItem("NEWMAPVALUE", JSON.stringify(Array.from(availbleDishList.entries())));
        return "1";
    };
    OnlineordersComponent.prototype.ngOnDestroy = function () {
        if (this.interval)
            clearInterval(this.interval);
    };
    OnlineordersComponent.prototype.clickoptions = function (dish, Kotorder) {
        if (this.socket.connected) {
            console.log("dish", dish);
            if (dish.recentDishQuantity !== 0) {
                var index = this.singleList.findIndex(function (x) { return x.uniqueDish_Id === dish.uniqueDishId; });
                if (index > -1) {
                    if (this.singleList[index].kdsrecentDishQuantity < dish.recentDishQuantity) {
                        // this.singleList[index].kdsrecentDishQuantity =
                        //   this.singleList[index].kdsrecentDishQuantity + 1;
                        this.singleList[index].kdsrecentDishQuantity = 1; //everytime it will take only one element count
                    }
                    else {
                        alert("you cant add more items now..");
                    }
                }
                else {
                    ////KDS  showing order place time and dishes But When Marked one dish as food ready another dishes auto showing food ready(Solved)////
                    this.singleList = [];
                    this.singleList.push({
                        dish_id: dish.dish_id,
                        dish_name: dish.dish_name,
                        count: dish.recentDishQuantity,
                        optionId: dish.optionId,
                        uniqueDish_Id: dish.uniqueDishId,
                        kdsrecentDishQuantity: 1
                    });
                }
                var finalObject = {
                    compareList: this.singleList,
                    Order_Id: Kotorder.order_id,
                    externalOrder_Id: Kotorder.externalOrderId,
                    table_id: Kotorder.table_id,
                    completed_Time: new Date(),
                    orderStatus: Kotorder.orderStatus,
                    tableStatusId: 2,
                    message: "Dishes are Ready.."
                };
                console.log("finalObject single", finalObject);
                this.socket.emit("Dishes-Ready", finalObject);
                // Store Take Away, Door Delivery & QSR Orders to KDS for close order
                if (Kotorder.table_id === "1001" || Kotorder.table_id === "1002" || Kotorder.table_id === "1004") {
                    this.changestatusOrder(finalObject);
                    this.sendUpdatedSavedOrders();
                }
                // this.showSnackbar();
                this.mdlSnackbarService.showSnackbar({
                    message: this.singleList.length +
                        " Order Inserted successfully on Table:  " +
                        Kotorder.tableName
                });
                this.ngOnInit();
            }
            else {
                this.mdlSnackbarService.showSnackbar({
                    message: "Can not edited as Dishes are allready Delivered.."
                });
            }
        }
        else {
            this.mdlSnackbarService.showSnackbar({
                message: "KDS Disconnected! Please check POS or Network Connection"
            });
        }
    };
    OnlineordersComponent.prototype.prepKdsClickOption = function (dish, Kotorder) {
        console.log("prep kds tick");
        if (this.socket.connected) {
            if (dish.preparedDishQuantity !== dish.quantity_dish) {
                this.singleList = [];
                this.singleList.push({
                    dish_id: dish.dish_id,
                    dish_name: dish.dish_name,
                    optionId: dish.optionId,
                    uniqueDish_Id: dish.uniqueDishId,
                    kdsPreparedDishQuantity: 1,
                    quantity_dish: dish.quantity_dish
                });
                var finalObject = {
                    compareList: this.singleList,
                    Order_Id: Kotorder.order_id,
                    externalOrder_Id: Kotorder.externalOrderId,
                    table_id: Kotorder.table_id,
                    completed_Time: new Date(),
                    orderStatus: Kotorder.orderStatus,
                    tableStatusId: 2,
                    message: "Dish Prepared.."
                };
                console.log("finalObject single", finalObject);
                this.socket.emit("dish-prepared", finalObject);
                if (Kotorder.table_id === "1001" || Kotorder.table_id === "1002" || Kotorder.table_id === "1004") {
                    this.dishPreparedChangestatusOrder(finalObject);
                    this.sendUpdatedSavedOrders();
                }
                this.mdlSnackbarService.showSnackbar({
                    message: "Dish Prepared! " + dish.dish_name
                        + " for Table: " + Kotorder.tableName
                });
                this.ngOnInit();
            }
            else {
                this.mdlSnackbarService.showSnackbar({
                    message: "All Dishe Qty are Allready Prepared.."
                });
            }
        }
        else {
            this.mdlSnackbarService.showSnackbar({
                message: "KDS Disconnected! Please check POS or Network Connection"
            });
        }
    };
    OnlineordersComponent.prototype.addOrdersFromLocalStorage = function () {
        var _this = this;
        var savedOrders = localStorage.getItem('savedOrders') != null ? JSON.parse(localStorage.getItem('savedOrders')) : [];
        console.log('savedOrders: ', savedOrders);
        savedOrders.forEach(function (savedOrder) {
            if (!_this.KotorderList.some(function (order) { return order.order_id === savedOrder.order_id; })) {
                _this.KotorderList.push(savedOrder);
            }
        });
        console.log('Updated KotorderList (response + savedOrder)', this.KotorderList);
    };
    OnlineordersComponent.prototype.changestatusOrder = function (kdsObject) {
        if (kdsObject.compareList.length != 0) {
            var savedOrders = localStorage.getItem('savedOrders') != null ? JSON.parse(localStorage.getItem('savedOrders')) : [];
            var billmodel = savedOrders.find(function (order) { return order.order_id === kdsObject.Order_Id; });
            var _loop_3 = function (i) {
                var index = billmodel.dishList.findIndex(function (x) { return x.uniqueDishId === kdsObject.compareList[i].uniqueDish_Id; });
                if (index > -1 && billmodel.dishList[index].recentDishQuantity !== 0) {
                    billmodel.dishList[index].recentDishQuantity = billmodel.dishList[index].oldrecentDishQuantity - kdsObject.compareList[i].kdsrecentDishQuantity;
                    billmodel.dishList[index].oldrecentDishQuantity = billmodel.dishList[index].recentDishQuantity;
                }
            };
            for (var i = 0; i < kdsObject.compareList.length; i++) {
                _loop_3(i);
            }
            var savedOrderIndex = savedOrders.findIndex(function (order) { return order.order_id === kdsObject.Order_Id; });
            if (savedOrderIndex !== -1) {
                savedOrders[savedOrderIndex] = billmodel;
                localStorage.setItem('savedOrders', JSON.stringify(savedOrders));
            }
            var KotorderListIndex = this.KotorderList.findIndex(function (order) { return order.order_id === kdsObject.Order_Id; });
            if (KotorderListIndex !== -1) {
                this.KotorderList[KotorderListIndex] = billmodel;
            }
            console.log('billmodel -', billmodel);
        }
    };
    OnlineordersComponent.prototype.dishPreparedChangestatusOrder = function (kdsObject) {
        if (kdsObject.compareList.length != 0) {
            var savedOrders = localStorage.getItem('savedOrders') != null ? JSON.parse(localStorage.getItem('savedOrders')) : [];
            var billmodel = savedOrders.find(function (order) { return order.order_id === kdsObject.Order_Id; });
            var _loop_4 = function (i) {
                var index = billmodel.dishList.findIndex(function (x) { return x.uniqueDishId === kdsObject.compareList[i].uniqueDish_Id; });
                if (index > -1 && billmodel.dishList[index].preparedDishQuantity !== billmodel.dishList[index].quantity_dish) {
                    console.log("old preparedDishQuantity - ", billmodel.dishList[index].preparedDishQuantity);
                    if (billmodel.dishList[index].preparedDishQuantity == undefined) {
                        billmodel.dishList[index].preparedDishQuantity = kdsObject.compareList[i].kdsPreparedDishQuantity;
                    }
                    else {
                        billmodel.dishList[index].preparedDishQuantity = billmodel.dishList[index].preparedDishQuantity + kdsObject.compareList[i].kdsPreparedDishQuantity;
                    }
                }
            };
            for (var i = 0; i < kdsObject.compareList.length; i++) {
                _loop_4(i);
            }
            var savedOrderIndex = savedOrders.findIndex(function (order) { return order.order_id === kdsObject.Order_Id; });
            if (savedOrderIndex !== -1) {
                savedOrders[savedOrderIndex] = billmodel;
                localStorage.setItem('savedOrders', JSON.stringify(savedOrders));
            }
            var KotorderListIndex = this.KotorderList.findIndex(function (order) { return order.order_id === kdsObject.Order_Id; });
            if (KotorderListIndex !== -1) {
                this.KotorderList[KotorderListIndex] = billmodel;
            }
            console.log('billmodel -', billmodel);
        }
    };
    OnlineordersComponent.prototype.deleteLocalStorageOrder = function (order_id) {
        var savedOrders = localStorage.getItem('savedOrders') != null ? JSON.parse(localStorage.getItem('savedOrders')) : [];
        var savedOrdersIndex = savedOrders.findIndex(function (order) { return order.order_id === order_id; });
        if (savedOrdersIndex !== -1) {
            savedOrders.splice(savedOrdersIndex, 1);
            console.log('deleteOrderFromLocalStorage - savedOrders', order_id);
        }
        localStorage.setItem('savedOrders', JSON.stringify(savedOrders));
    };
    OnlineordersComponent.prototype.sendUpdatedSavedOrders = function () {
        var savedOrders = localStorage.getItem('savedOrders') != null ? JSON.parse(localStorage.getItem('savedOrders')) : [];
        console.log('update-kds-saved-orders - ', savedOrders);
        this.socket.emit('update-kds-saved-orders', savedOrders);
    };
    OnlineordersComponent.prototype.getUpdateSavedOrdersResponse = function () {
        var _this = this;
        this.socket.on("update-kds-saved-orders-response", function (responseSavedOrders) {
            console.log("update-kds-saved-orders-response -", responseSavedOrders);
            var savedOrders = localStorage.getItem('savedOrders') != null ? JSON.parse(localStorage.getItem('savedOrders')) : [];
            responseSavedOrders.forEach(function (responseSavedOrder) {
                var savedOrderIndex = savedOrders.findIndex(function (order) { return order.order_id === responseSavedOrder.order_id; });
                if (savedOrderIndex !== -1) {
                    savedOrders[savedOrderIndex] = responseSavedOrder;
                }
                else {
                    savedOrders.push(responseSavedOrder);
                }
            });
            localStorage.setItem('savedOrders', JSON.stringify(savedOrders));
            _this.socket.emit("Check-Exist-Order");
        });
    };
    OnlineordersComponent.ctorParameters = function () { return [
        { type: _service_socketconfig_service__WEBPACK_IMPORTED_MODULE_2__["SocketconfigService"] },
        { type: _angular_mdl_core__WEBPACK_IMPORTED_MODULE_3__["MdlSnackbarService"] }
    ]; };
    OnlineordersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-onlineorders",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./onlineorders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/onlineorders/onlineorders.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./onlineorders.component.scss */ "./src/app/onlineorders/onlineorders.component.scss")).default]
        })
    ], OnlineordersComponent);
    return OnlineordersComponent;
}());



/***/ }),

/***/ "./src/app/service/socketconfig.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/socketconfig.service.ts ***!
  \*************************************************/
/*! exports provided: SocketconfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketconfigService", function() { return SocketconfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_mdl_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-mdl/core */ "./node_modules/@angular-mdl/core/fesm5/angular-mdl-core.js");




var SocketconfigService = /** @class */ (function () {
    function SocketconfigService(mdlSnackbarService) {
        var _this = this;
        this.mdlSnackbarService = mdlSnackbarService;
        var ipAddress = this.getIpaddress();
        var socketServerUrl = "http://" + ipAddress + ":7000";
        console.log('socketServerUrl - ', socketServerUrl);
        // this.socket = io(socketServerUrl);
        try {
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(socketServerUrl);
            this.socket.on('connect', function () {
                console.log('Socket connected successfully');
                _this.showSnackbar("KDS Connected Successfully!");
                _this.socket.emit("Check-Exist-Order");
            });
            this.socket.on('connect_error', function (error) {
                console.error('Socket connection error:', error);
                _this.showSnackbar("Network Connection Error! Reconnecting to POS Application");
            });
            this.socket.on('disconnect', function () {
                console.log('Socket disconnected');
                _this.showSnackbar("KDS Disconnected! Please check POS or Network Connection");
            });
        }
        catch (error) {
            console.error('An error occurred while connecting to the socket server:', error);
            this.showSnackbar("Network Connection Error! Reconnecting to POS Application");
        }
    }
    SocketconfigService.prototype.getSocketConnection = function () {
        return this.socket;
    };
    SocketconfigService.prototype.selectipaddress = function (soketIpValue) {
        localStorage.setItem('ipAddress', soketIpValue);
        console.log("called");
    };
    SocketconfigService.prototype.getIpaddress = function () {
        console.log("get called");
        return localStorage.getItem('ipAddress');
    };
    SocketconfigService.prototype.showSnackbar = function (msg) {
        this.mdlSnackbarService.showSnackbar({
            message: msg,
            timeout: 10000
        });
    };
    SocketconfigService.ctorParameters = function () { return [
        { type: _angular_mdl_core__WEBPACK_IMPORTED_MODULE_3__["MdlSnackbarService"] }
    ]; };
    SocketconfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SocketconfigService);
    return SocketconfigService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Digirestro\digirestro-kds\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { observable, action } from 'mobx';
import http from '../utils/fetch';
class Store {
    constructor() {
        this.list = [];
    }
    setList() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield http({ url: 'https://api.myjson.com/bins/yhum4' });
            this.list = result.data;
        });
    }
    getRefreshData() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield http({ url: 'https://api.myjson.com/bins/iqxnw' });
            let newResult = result.data.map((value) => {
                let { id } = value, rest = __rest(value, ["id"]);
                return Object.assign({ id: new Date().getTime().toString() }, rest);
            });
            this.list = [...newResult, ...this.list];
        });
    }
}
__decorate([
    observable
], Store.prototype, "list", void 0);
__decorate([
    action
], Store.prototype, "setList", null);
__decorate([
    action
], Store.prototype, "getRefreshData", null);
export default new Store();
//# sourceMappingURL=list.js.map
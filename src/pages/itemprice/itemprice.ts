import { IonicPage } from "ionic-angular/navigation/ionic-page";
import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { NavController } from "ionic-angular/navigation/nav-controller";
import { NavParams } from "ionic-angular/navigation/nav-params";
import { DataService } from '../../services/data.service';
import { jdaService } from '../../services/jda.service';

@IonicPage()
@Component({
    templateUrl: 'itemprice.html',
    providers:[
    ]
})
export class ItemPricePage{
    finalPrice: any;
    recommendationItems: any[];
    competetorItems: any[];
    email:string;
    fbJson:string;
    samePrice: string;
    couponPath : string;

    constructor(public http: Http, 
        private navCtrl: NavController, 
        private navParams: NavParams,
        public dataService: DataService,
        public jdaService: jdaService
        ){
        var barcodeId = navParams.get("barcodeId");
        this.email = navParams.get("email");  
        this.fbJson = navParams.get("fbJsonData");
        var self = this;
        this.jdaService.getProductDetails(this.fbJson, this.email, barcodeId, 'Inorbit').subscribe(data=>{
            self.finalPrice = data;
            self.competetorItems = self.finalPrice.list;
            self.competetorItems.forEach((element) => {
                if(element.name == 'Centro'){
                    element.ImgUrl = 'assets/imgs/centro.jpg';
                }else if(element.name == 'Hyderabad Central'){
                    element.ImgUrl = 'assets/imgs/hydCentral.jpg';
                }else{
                    element.ImgUrl = 'assets/imgs/shopperStop.jpg';
                }
            });
            
            if(self.finalPrice.segId == 1){
                self.couponPath = 'assets/imgs/coupon1.png';
            }else if(self.finalPrice.segId == 2){
                self.couponPath = 'assets/imgs/coupon2.png';
            }else if(self.finalPrice.segId == 3){
                self.couponPath = 'assets/imgs/coupon3.png';
            }else if(self.finalPrice.segId == 4){
                self.couponPath = 'assets/imgs/coupon4.png';
            }else{
                self.couponPath = 'assets/imgs/coupon5.png';
            }

            self.recommendationItems = self.finalPrice.recItems;
            if(self.finalPrice.finalPrice == self.finalPrice.price){
                this.samePrice = "samePrice";
            }
        });
    } 

    showItem(barcodeId){
       this.navCtrl.pop();
       this.navCtrl.push("ItemPricePage", {"barcodeId": barcodeId, 'email': this.email , 'fbJsonData': this.fbJson});
    }

    showPrice(price){
        document.getElementById("item-price-coupon").hidden = true;
        document.getElementById("priceLabel").innerText = "Best Price:  ₹"+ price;
        document.getElementById("priceLabel").hidden = false;
    }
}
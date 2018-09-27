import { NgModule } from "@angular/core";
import { ItemPricePage } from "./itemprice";
import { IonicPageModule } from "ionic-angular/module";

@NgModule({
    declarations:[
        ItemPricePage
    ],
    imports:[
        IonicPageModule.forChild(ItemPricePage)
    ],
    entryComponents:[
        ItemPricePage
    ],
    providers:[
        
    ]
})
export class ItemPricePageModule{}
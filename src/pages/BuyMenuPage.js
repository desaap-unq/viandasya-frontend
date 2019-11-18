import React, { Component } from "react";
import ViandasyaNavbar from "../components/Navbars/Viandasya-navbar.js";
import ViandasyaHeader from "../components/Headers/ViandasyaHeader.js";
import ViandasyaMenus from "../components/body/ViandasyaMenus.js";

import { Container, Card, Button } from "reactstrap";

export default class BuyMenuPage extends Component {
    constructor() {
        super();
        this.menus = [{ "id": 1, "name": "Doble Cuarto", "description": "Doble carne, doble queso", "category": ["HAMBURGUESAS"], "deliveryCost": 0.0, "startDate": "2019-11-15", "dueDate": "2019-11-15", "deliveryTime": "21:20:00", "averageDeliveryTime": "21:20:00", "price": 250.0, "minimumQuantity": 1, "minimumQuantityPrice": 10.0, "minimumQuantityTwo": 2, "minimumQuantityPriceTwo": 20.0, "maximumAmountSalesPerDay": 20, "active": true, "business": { "id": 1, "name": "Mc Donald", "logo": "path Logo", "locality": "Quilmes", "phone": 15152659, "address": "Peatonal Rivadavia 112", "location": "gmaps coord", "description": "Vendemos las mejores hamburguesas", "link": "website", "email": "hamburguer@mcdonald.com", "schedule": "[08-23]", "days": "LunADom", "delivery": "distance min - delivery", "wallet": { "id": 2, "balance": 0.0 }, "balance": 0.0 } }, { "id": 2, "name": "TripleMc", "description": "Triple carne, aderezo casero", "category": ["HAMBURGUESAS"], "deliveryCost": 0.0, "startDate": "2019-11-15", "dueDate": "2019-11-15", "deliveryTime": "21:20:00", "averageDeliveryTime": "21:20:00", "price": 250.0, "minimumQuantity": 1, "minimumQuantityPrice": 10.0, "minimumQuantityTwo": 2, "minimumQuantityPriceTwo": 20.0, "maximumAmountSalesPerDay": 20, "active": true, "business": { "id": 1, "name": "Mc Donald", "logo": "path Logo", "locality": "Quilmes", "phone": 15152659, "address": "Peatonal Rivadavia 112", "location": "gmaps coord", "description": "Vendemos las mejores hamburguesas", "link": "website", "email": "hamburguer@mcdonald.com", "schedule": "[08-23]", "days": "LunADom", "delivery": "distance min - delivery", "wallet": { "id": 2, "balance": 0.0 }, "balance": 0.0 } }];
        this.business = this.menus[0].business;
    }
    render() {
        return (
            <div>
                <ViandasyaNavbar />
                <ViandasyaHeader business={this.business} />
                <ViandasyaMenus menus={this.menus}/>
            </div>
        );
    }
}
import { LightningElement, api } from 'lwc';

export default class Item extends LightningElement {
    @api itemName = 'New Item';
}
import { LightningElement ,api} from 'lwc';

const colums=[
    {label:"Account Id",fieldName:'Id'},
    {label:"Account Name",fieldName:'name'},
];

export default class AccountsearchResults extends LightningElement {
    colums= colums;
    @api serchresults= [];
}
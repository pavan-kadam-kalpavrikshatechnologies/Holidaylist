sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.kt.holidaylist.holidaylist.controller.View1", {
            onInit: function () {
                var jsondata = [
                    { name: '2021', code: '2021' }, 
                    { name: '2022', code: '2022' }, 
                    { name: '2023', code: '2023' }, 
                    { name: '2024', code: '2024' }, 
                    { name: '2025', code: '2025' }, 
                    { name: '2026', code: '2026' },
                    { name: '2027', code: '2027' },
                    { name: '2028', code: '2028' },
                    { name: '2029', code: '2029' },
                    { name: '2030', code: '2030' },
                    { name: '2031', code: '2031' },
                ];
                var oModel = new sap.ui.model.json.JSONModel(jsondata)
                this.getView().setModel(oModel,'year')

                // var oColItem = new sap.ui.core.Item({
                //     key: "{code}",
                //     text: "{name}"
                // });
                // this.getView().setModel(oModel);
                // this.getView().byId('combo').bindAggregation("items","/",oColItem)
                
            },
            onChange : function(oEvent){
                var oValue = oEvent.getSource().getValue();
                var jsondata1 = [{ 
                    "sr":1,
                    "name":"Makar Shankrat",
                    "date":"15-jun-2021",
                    "day":"Monday",
                    "bangalore":"X",
                    "mumbai":"",
                    "delhi":"X",
                    "hyderabad":"",
                    "chennai":""
                },{
                    "sr":2,
                    "name":"Republic Day",
                    "date":"26-jun-2022",
                    "day":"Friday",
                    "bangalore":"",
                    "mumbai":"",
                    "delhi":"X",
                    "hyderabad":"X",
                    "chennai":""
                },{
                    "sr":3,
                    "name":"Maha Shiv Ratri",
                    "date":"8-mar-2023",
                    "day":"Friday",
                    "bangalore":"",
                    "mumbai":"X",
                    "delhi":"X",
                    "hyderabad":"",
                    "chennai":""
                },{
                    "sr":4,
                    "name":"Holi",
                    "date":"25-mar-2024",
                    "day":"Monday",
                    "bangalore":"X",
                    "mumbai":"X",
                    "delhi":"X",
                    "hyderabad":"",
                    "chennai":""
                },{
                    "sr":5,
                    "name":"Ugadi",
                    "date":"9-Apr-2025",
                    "day":"Tuesday",
                    "bangalore":"X",
                    "mumbai":"X",
                    "delhi":"X",
                    "hyderabad":"X",
                    "chennai":"X"
                },{
                    "sr":6,
                    "name":"Ramadan",
                    "date":"11-Apr-2026",
                    "day":"Tuesday",
                    "bangalore":"X",
                    "mumbai":"X",
                    "delhi":"X",
                    "hyderabad":"X",
                    "chennai":"X"
                },{
                    "sr":7,
                    "name":"May Day",
                    "date":"1-May-2024",
                    "day":"Wedenesday",
                    "bangalore":"X",
                    "mumbai":"X",
                    "delhi":"X",
                    "hyderabad":"X",
                    "chennai":"X"
                },{
                    "sr":8,
                    "name":"Independence Day",
                    "date":"15-Aug-2024",
                    "day":"Tuesday",
                    "bangalore":"X",
                    "mumbai":"X",
                    "delhi":"X",
                    "hyderabad":"X",
                    "chennai":"X"
                },{
                    "sr":9,
                    "name":"Ganesh Chaturthi",
                    "date":"6-sep-2024",
                    "day":"Friday",
                    "bangalore":"",
                    "mumbai":"X",
                    "delhi":"",
                    "hyderabad":"",
                    "chennai":""
                },{
                    "sr":10,
                    "name":"Gandi Jayanti",
                    "date":"2-Oct-2024",
                    "day":"Wednesday",
                    "bangalore":"",
                    "mumbai":"X",
                    "delhi":"",
                    "hyderabad":"",
                    "chennai":""
                },{
                    "sr":11,
                    "name":"Maha Navami",
                    "date":"11-oct-2024",
                    "day":"Friday",
                    "bangalore":"X",
                    "mumbai":"X",
                    "delhi":"X",
                    "hyderabad":"X",
                    "chennai":"X"
                },{
                    "sr":12,
                    "name":"Diwali",
                    "date":"1-Nov-2024",
                    "day":"Friday",
                    "bangalore":"X",
                    "mumbai":"X",
                    "delhi":"X",
                    "hyderabad":"X",
                    "chennai":"X"
                },{
                    "sr":13,
                    "name":"Christmas",
                    "date":"25-Dec-2024",
                    "day":"Wedenesday",
                    "bangalore":"X",
                    "mumbai":"X",
                    "delhi":"X",
                    "hyderabad":"X",
                    "chennai":"X"
                }
                ]

                    var oModel1 = new sap.ui.model.json.JSONModel(jsondata1)
                    this.getView().setModel(oModel1,'holiday')
                    
                    var oFilter = new sap.ui.model.Filter("date", sap.ui.model.FilterOperator.Contains, oValue);
                    this.byId("TableId").getBinding("items").filter(oFilter);
            }
        })            
            
        });

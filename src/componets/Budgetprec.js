import React from 'react';
const Chart = require("react-google-charts").Chart;

function Budgetprec (){
    return (
        <Chart
        width={'600px'}
        height={'400px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Budget', 'How much left of your budget'],
          ["Budget", "left", 90],
          ["Budget","spend", 10] 

        ]}
        options={{
          title: 'My Budget',

          pieHole: 0.6,
        }}
        rootProps={{ 'data-testid': '3' }}
        chartWrapperParams={{view: { columns: [0, 1]} }}
        chartPackages={["corechart", "controls"]}
        controls ={[
            {
                controlEvents:[
                    {
                        eventName: "statechange", 
                        callback: ({chartWrapper, controlWrapper}) =>{
                            alert(JSON.stringify(controlWrapper.getState())
                        )
                        },
                    },
                ],
                controlType: "CategoryFilter", 
                options: {
                    filterColumnIndex: 1,
                    ui: {
                        labelStacking: "Vertical", 
                        label: "Budget Selection",
                        allowTyping: false, 
                        allowMultiple: false, 
                    },
                },
            },
        ]}
        
      />
    )
} 

export default Budgetprec; 
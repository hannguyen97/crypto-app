import React, { useEffect, useState } from 'react';
import { Stock } from '@ant-design/charts';


const Chart = ({ symbol }) => {
    const [data, setData] = useState([]);

    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var year = a.getFullYear();
        var month = ("0" + (a.getMonth() + 1)).slice(-2);
        var date = a.getDate();
        var time = year + '-' + month + '-' + date;
        return time;
    }

    useEffect(() => {
        asyncFetch();
    }, [symbol]);


    const asyncFetch = () => {
        fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol.symbol}&tsym=USD&limit=10&api_key=358bc81af53872e38c46f999aad1a056192a995a208724fb557b2ac02db07d3b`)
            .then((response) => response.json())
            .then((json) => {
                if (json) {
                    for (let index = 0; index < json.Data.Data.length; index++) {
                        const element = json.Data.Data[index];
                        element.time = timeConverter(element.time)
                    }
                    setData(json.Data.Data)
                }
            }
            )
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

    var config = {
        data: data,
        xField: 'time',
        yField: ['open', 'close', 'high', 'low'],
        tooltip: {
            crosshairs: {
                line: {
                    style: {
                        lineWidth: 0.5,
                        stroke: 'rgba(0,0,0,0.25)',
                    },
                },
                text: function text(type, defaultContent, items) {
                    var textContent;
                    if (type === 'x') {
                        var item = items[0];
                        textContent = item ? item.title : defaultContent;
                    } else {
                        textContent = ''.concat(defaultContent.toFixed(2));
                    }
                    return {
                        position: type === 'y' ? 'start' : 'end',
                        content: textContent,
                        style: { fill: '#dfdfdf' },
                    };
                },
                textBackground: {
                    padding: [4, 8],
                    style: { fill: '#363636' },
                },
            },
        },
    };
    return <Stock {...config} />;
};
export default Chart;
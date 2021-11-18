import React from 'react'

function Details({ data }) {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
                <img style={{ width: 80 }} src={data.icon} />
                <span style={{ fontSize: 30 }}> {data.name}</span>
                <p><span className='price'>$ {data.price}</span></p>
            </div>
            <div className='details-info'>

                <div>
                    <p> Website: <a href={data.websiteUrl}>{data.websiteUrl}</a></p>
                    <p> Twitter: <a href={data.twitterUrl}>{data.twitterUrl}</a></p>
                    <p> Contract Address: <strong>{data.contractAddress}</strong></p>
                </div>

                <div className='item'>
                    {data.priceChange1h >= 0 ?
                        <p>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                1h(%) :
                                <span style={{ color: "green" }}>
                                    <i class="fa fa-caret-up" aria-hidden="true"></i>
                                    {data.priceChange1h} %
                                </span>
                            </div>

                        </p> :
                        <p>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                1h(%) :
                                <span style={{ color: "red" }}>
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                    {data.priceChange1h} %
                                </span>
                            </div>
                        </p>
                    }

                    {data.priceChange1d >= 0 ? <p>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            24h(%) : <span style={{ color: "green" }}>
                                <i class="fa fa-caret-up" aria-hidden="true"></i>
                                {data.priceChange1d} %
                            </span>
                        </div>
                    </p> :
                        <p>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>

                                24h(%) : <span style={{ color: "red" }}>
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                    {data.priceChange1d} %
                                </span>
                            </div>
                        </p>
                    }

                    {data.priceChange1w >= 0 ? 
                    <p>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            7d(%) : <span style={{ color: "green" }}>
                                <i class="fa fa-caret-up" aria-hidden="true"></i>
                                {data.priceChange1w} %
                            </span>
                        </div>
                    </p> :
                        <p>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                7d(%) : <span style={{ color: "red" }}>
                                    <i class="fa fa-caret-down" aria-hidden="true"></i>
                                    {data.priceChange1w} %
                                </span>
                            </div>
                        </p>
                    }
                </div>
            </div>


        </div>
    )
}

export default Details
import React from 'react'

const SubscriptionSection = (props) => {
    const {title,body} = props
    return (
        <div className="col-sm-4">
            <p className="subscriptionSectionTitle">{title}</p>
            <p className="subscriptionSectionBody">{body}</p>
        </div>
    )
}

export default SubscriptionSection

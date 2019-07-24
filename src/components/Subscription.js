import React from 'react'

import SubscriptionSection from './SubscriptionSection';
import DefaultForm from './DefaultForm'

const Subscription = () => {
    const styles = {
        backgroundColor:'#eeeeee'
    }
    return (
        <div className="subscription">
            <div className="container">
                <h1>Before you leave</h1>
                <div className="row subscriptionSections">
                    <SubscriptionSection title="visa & documents" body="There are some things you should take care of before going to your next adventure. We’ll help you to get required visas and documents needed."/>

                    <SubscriptionSection title="Accommodation" body="There are some things you should take care of before going to your next adventure. We’ll help you to get required visas and documents needed."/>

                    <SubscriptionSection title="transportation" body="There are some things you should take care of before going to your next adventure. We’ll help you to get required visas and documents needed."/>
                </div>

                <div className="subscriptionFormContainer">
                    <p className="subscriptionFormHeading">get hottest deals to your inbox</p>
                    <DefaultForm name="email" placeholder="Email address" buttonText="Subscribe" style={styles} />
                </div>
            </div>
        </div>
    )
}

export default Subscription

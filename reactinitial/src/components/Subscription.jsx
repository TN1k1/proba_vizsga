import React, { useState, useEffect } from 'react';

function Subscription() {
    const [email, setEmail] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [showSubsriptionString, setShowSubsriptionString] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [subscribed, setSubscribed] = useState(false);
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowSubsriptionString(true)
        }, 10000);
    
        return () => clearTimeout(timeoutId);
    }, []);    

    function handleEmailChange(event) {
        setEmail(event.target.value);
        setIsButtonDisabled(!event.target.value.includes('@') || !event.target.value.includes('.'));
    }
    
    function handleSubmit(event) {
        event.preventDefault();

        setLoading(true);
        setIsButtonVisible(false);

        fetch('https://demoapi.com/api/series/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email : email
            }),
        })
        .then(response => {
            setTimeout(() => {
                setShowSubsriptionString(false);
            }, 5000)

            console.log(response);
            setLoading(false);
            if (response.status === 201) {
                setSubscribed(true);
            } else {
                console.log('ERROR')
            }
        });
    }
    
    return (
        <>
            {showSubsriptionString && <p>Subscribe to our newsletter</p>}
            {showSubsriptionString && <form onSubmit={handleSubmit}>
            {loading && <p>Loading...</p>}
            {subscribed && <p>Subscribed</p>}
            {isButtonVisible && <input type="email" value={email} onChange={handleEmailChange} />}
            {isButtonVisible && <button type="submit" disabled={isButtonDisabled}>
                Subscribe
            </button>}
            </form>}
        </>
    );
    }

export default Subscription
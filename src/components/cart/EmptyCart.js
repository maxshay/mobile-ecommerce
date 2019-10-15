import React from 'react';

export default function EmptyCart() {
    return (
        <div className="conatiner py-5">
            <div className="row py-5">
                <div className="col-12 col-md-4 mx-auto text-center text-title py-5">
                    <h1 style={{fontSize:'1.5em',fontFamily: 'Arvo, serif',fontWeight:'700'}}>Your cart is empty :(</h1>
                    <p className="mx-auto mt-4" style={{width:'80%', fontSize:'14px'}}>Items remain in your bag for 60 minutes, and then they’re moved to your Saved Items.</p>
                    <p className="mx-auto" style={{width:'50%', fontSize:'14px'}}>Sign in to see your bag and get shopping!</p>
                    <button className="btn-signin">Sign in</button>
                </div>
            </div>
        </div>
    );
}
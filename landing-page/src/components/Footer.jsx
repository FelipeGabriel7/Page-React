import React from "react";
import './footer.css'

export function Footer(){
    return(
        <>
            <section className="componentFooter">
                <div className="endItems">
                    <h2> Blogr </h2>

                    <ul>
                        <li> Product </li>
                        <li> Company </li>
                        <li> Connect </li>
                    </ul>
                </div>
                <div className="optionsItems">
                    <ul>
                        <li> Overview</li>
                        <li> Pricing</li>
                        <li> Marketplace</li>
                        <li> Features</li>
                        <li> Integrations </li>
                    </ul>
                    <ul>
                        <li> About </li>
                        <li> Team </li>
                        <li> Blog </li>
                        <li> Carrers </li>
                    </ul>
                    <ul>
                        <li> Contact </li>
                        <li> Newsletter </li>
                        <li> Linkedin </li>
                    </ul>
                </div>

            </section>
        </>
    )
}
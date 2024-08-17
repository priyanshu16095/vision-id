import React from 'react'

function Footer() {
    return (
        <div className='footer container flex-v gap-md'>
            <div className="flex-v gap-sm">
                <p>Some features may not be available in all regions or all languages.</p>
                <p>Some features require specific hardware and software. For more information, see “Feature Requirements” at support.</p>
            </div>
            <div className="footer_bottom flex-s wrap gap-sm">
                <p>Copyright © 2024 VisionID Inc. All rights reserved.</p>
                <div className="footer__links flex-h gap">
                    <p>Privacy Policy</p>
                    <p>Terms of use</p>
                    <p>Sales and Refunds</p>
                    <p>Legal</p>
                </div>
                <p>Choose your country or region</p>
            </div>
        </div>
    )
}

export default Footer

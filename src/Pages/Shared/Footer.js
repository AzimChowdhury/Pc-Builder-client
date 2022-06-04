import React from 'react'

function Footer() {
    return (
        <div className='mt-20'>
            <footer class="footer p-10 bg-neutral text-neutral-content justify-around">
                <div>
                    <span class="footer-title">Services</span>
                    <p class="link link-hover">Branding</p>
                    <p class="link link-hover">Design</p>
                    <p class="link link-hover">Marketing</p>
                    <p class="link link-hover">Advertisement</p>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <p class="link link-hover">About us</p>
                    <p class="link link-hover">Contact</p>
                    <p class="link link-hover">Jobs</p>
                    <p class="link link-hover">Press kit</p>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <p class="link link-hover">Terms of use</p>
                    <p class="link link-hover">Privacy policy</p>
                    <p class="link link-hover">Cookie policy</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer

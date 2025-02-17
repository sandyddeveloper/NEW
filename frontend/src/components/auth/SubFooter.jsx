import React from 'react';

const SubFooter = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            {/* Links Section */}
            <div className="flex flex-col lg:flex-row justify-center items-center text-center gap-4 lg:gap-8">
                {["Company", "About Us", "Team", "Products", "Blog", "Pricing"].map((item, index) => (
                    <a key={index} href="#" target="_blank" className="text-slate-400 hover:text-white transition">
                        {item}
                    </a>
                ))}
            </div>

            {/* Social Icons Section */}
            <div className="flex justify-center items-center gap-6 mt-4">
                {[
                    { icon: "fab fa-dribbble", label: "Dribbble" },
                    { icon: "fab fa-twitter", label: "Twitter" },
                    { icon: "fab fa-instagram", label: "Instagram" },
                    { icon: "fab fa-pinterest", label: "Pinterest" },
                    { icon: "fab fa-github", label: "GitHub" }
                ].map((social, index) => (
                    <a key={index} href="#" target="_blank" aria-label={social.label} className="text-slate-400 hover:text-amber-300 transition">
                        <span className={`text-lg ${social.icon}`}></span>
                    </a>
                ))}
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-6">
                <p className="text-slate-400 text-sm">
                    © {new Date().getFullYear()} <strong>DEVXNET</strong>. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default SubFooter;

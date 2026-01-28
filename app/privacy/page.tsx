"use client";

import { useState, useEffect } from 'react';

const PrivacyPage = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 mt-20">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information when you use our website.</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>None.</strong></li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
            <p>We do not collect any personal information from our users. Therefore, we do not use or share any personal information.</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Data Security</h2>
            <p>We take appropriate measures to protect your information. However, since we do not collect any personal information, there is no data to protect.</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
            <p>We may update this privacy policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
            <p>If you have any questions or concerns about this privacy policy, please contact us at <a href="mailto:c6m1lo@proton.me" className="text-blue-400 hover:text-blue-300">c6m1lo@proton.me</a></p>
        </div>
    )
}

export default PrivacyPage;
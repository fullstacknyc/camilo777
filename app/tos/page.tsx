"use client";

import { useState, useEffect } from 'react'

const tos = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 mt-20">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p>Welcome to the Terms of Service page. Here you will find the terms and conditions that govern the use of our services.</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using our services, you agree to be bound by these terms. If you do not agree to these terms, please do not use our services.</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">2. User Responsibilities</h2>
            <p>Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">3. Prohibited Activities</h2>
            <p>Users agree not to engage in any activities that may harm our services or other users, including but not limited to spamming, hacking, or distributing malware.</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">4. Termination</h2>
            <p>We reserve the right to terminate or suspend user accounts at our discretion, without prior notice, for conduct that we believe violates these terms or is harmful to other users.</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">5. Changes to Terms</h2>
            <p>We may update these terms from time to time. Users will be notified of any significant changes, and continued use of our services constitutes acceptance of the updated terms.</p>
        </div>
    )
}

export default tos;
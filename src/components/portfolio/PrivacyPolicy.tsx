import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy for Sapling Guide</h1>
        <p className="text-gray-600 italic mb-6">Last updated: May 29, 2025</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Sapling Guide ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our iOS application.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Information We Collect</h2>
          
          <h3 className="text-xl font-medium text-gray-800 mb-2">Information You Provide</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-1">
            <li><strong>Account Information:</strong> Email address, name, and password when you create an account</li>
            <li><strong>Journey Information:</strong> Your surrogacy journey stage, important dates, and milestones</li>
            <li><strong>Journal Entries:</strong> Personal reflections and mood tracking data you choose to record</li>
            <li><strong>Profile Information:</strong> Optional information about your family planning journey</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-800 mb-2">Information Collected Automatically</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li><strong>Usage Data:</strong> How you interact with app features (via Firebase Analytics)</li>
            <li><strong>Device Information:</strong> Device type, operating system version, and app version</li>
            <li><strong>Crash Reports:</strong> Technical information if the app crashes to help us improve stability</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li>To provide personalized content based on your journey stage</li>
            <li>To save and sync your journal entries and milestones</li>
            <li>To send relevant notifications about your journey milestones</li>
            <li>To improve our app and user experience</li>
            <li>To provide customer support</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Data Storage and Security</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li>Your data is stored securely using Firebase services with encryption</li>
            <li>Journal entries and personal information are private to your account</li>
            <li>We use industry-standard security measures to protect your data</li>
            <li>You can delete your account and all associated data at any time</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Data Sharing</h2>
          <p className="text-gray-700 leading-relaxed mb-2">We do not sell, rent, or share your personal information with third parties except:</p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li>With service providers who help us operate the app (Firebase)</li>
            <li>If required by law or legal process</li>
            <li>To protect the rights and safety of our users</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Your Rights</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Delete your account and data</li>
            <li>Export your journal entries</li>
            <li>Opt-out of analytics tracking</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Children's Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            Our app is not intended for children under 17. We do not knowingly collect information from children under 17.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this privacy policy from time to time. We will notify you of any changes by updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            If you have questions about this privacy policy or your data, please contact us at:
          </p>
          <p className="text-gray-700 leading-relaxed">
            Email: <a href="mailto:privacy@saplingguide.com" className="text-blue-600 hover:text-blue-800 underline">privacy@saplingguide.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl p-6 mx-auto mt-3">
      <h1 className="mt-8 mb-8 text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mb-4 text-white">Effective Date: August 18, 2024</p>

      <div className="space-y-6">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">1. Introduction</h2>
          <p className='text-white'>
            Welcome to X Boson AI. We are committed to protecting your privacy and
            ensuring that your personal information is handled in a safe and
            responsible manner. This Privacy Policy outlines the types of
            personal information we collect, how we use it, and the steps we
            take to safeguard it.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">2. Information We Collect</h2>
          <h3 className="font-semibold text-white">2.1 Information You Provide</h3>
          <p className='text-white'>
            Email Address: When you create an account using Google Firebase
            email-password authentication, we collect your email address.
          </p>

          <h3 className="font-semibold text-white">2.2 Information Collected Automatically</h3>
          <p className='text-white'>
            Device Values: Our app retrieves device values from the Adafruit API
            server and displays them on your home screen.
          </p>

          <h3 className="font-semibold text-white">2.3 Information from Third-Party Services</h3>
          <ul className="text-white list-disc list-inside">
            <li>
              Firebase Authentication: We use Google Firebase to manage user
              authentication and ensure secure access to the app.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">3. How We Use Your Information</h2>
          <ul className="text-white list-disc list-inside">
            <li>
              To provide and improve our services: We use your email address to
              authenticate your account and allow access to your device values.
            </li>
            <li>
              To communicate with you: We may use your email address to send you
              updates about new features or other relevant information.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">4. Sharing Your Information</h2>
          <p className='text-white'>
            We do not share your personal information with third parties, except
            in the following circumstances:
          </p>
          <ul className="text-white list-disc list-inside">
            <li >With your consent or at your direction.</li>
            <li>
              With service providers like Firebase who perform services on our
              behalf.
            </li>
            <li>
              For legal reasons: We may share information if required by law.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">5. Data Security</h2>
          <p className='text-white'>
            We take reasonable measures to protect your information from
            unauthorized access. However, no internet transmission is fully
            secure, so take care when sending information.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">6. Your Choices and Rights</h2>
          <ul className="text-white list-disc list-inside">
            <li>Access and update your personal information within the app.</li>
            <li>Delete your account at any time.</li>
            <li>
              Opt-out of communications by following the instructions in our
              emails.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">7. Children's Privacy</h2>
          <p className='text-white'>
            Our app is not intended for children under 13. If we collect
            information from a child under 13, we will delete it.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">8. Changes to This Privacy Policy</h2>
          <p className='text-white'>
            We may update this policy. We will notify you of any changes by
            updating the "Effective Date" at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">9. Contact Us</h2>
          <p className='text-white'>
            If you have questions, contact us at <a href="mailto:info@xbosonai.in" className="text-blue-600 underline">info@xbosonai.in</a> or at the following address:
          </p>
          <address className="not-italic text-white">
            2nd Floor, Administrative Block, Govt Polytechnic College, Koottupaatha, Palakkad, Kerala 678551
          </address>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

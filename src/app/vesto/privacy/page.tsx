import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Vesto",
  description:
    "Learn how Vesto by MindNestCorp collects, uses, and protects your personal information.",
};

const EFFECTIVE_DATE = "July 13, 2026";
const CONTACT_EMAIL = "hello@mindnestcorp.com";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-semibold text-white">{title}</h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-neutral-400">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="mb-2 text-base font-medium text-neutral-200">{title}</h3>
      <div className="space-y-2 text-[15px] leading-relaxed text-neutral-400">{children}</div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D4F53C]" />
      <span>{children}</span>
    </li>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#D4F53C]">
            Legal
          </p>
          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-500">
            Effective date: {EFFECTIVE_DATE} &nbsp;·&nbsp; Applies to: Vesto iOS &amp; Android app
            and mindnestcorp.com/vesto
          </p>
        </div>

        {/* Intro */}
        <p className="mb-12 text-[15px] leading-relaxed text-neutral-400">
          MindNestCorp (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Vesto
          mobile application and its associated web properties (collectively, the
          &quot;Service&quot;). This Privacy Policy explains what information we collect, how we use
          it, with whom we share it, and the choices you have. By using the Service you agree to
          the practices described here.
        </p>

        <div className="mb-12 rounded-xl border border-[#D4F53C]/20 bg-[#D4F53C]/5 px-6 py-5">
          <p className="text-sm font-medium text-[#D4F53C]">
            Important &mdash; Not Financial Advice
          </p>
          <p className="mt-1 text-sm text-neutral-400">
            Vesto provides market data, AI-generated research, news, and earnings information for
            informational purposes only. Nothing in the Service constitutes financial, investment,
            tax, or legal advice.
          </p>
        </div>

        {/* 1 */}
        <Section title="1. Information We Collect">
          <SubSection title="1.1 Information you provide directly">
            <ul className="space-y-2">
              <Bullet>
                <strong className="text-neutral-300">Account information:</strong> name, email
                address, and password when you create an account.
              </Bullet>
              <Bullet>
                <strong className="text-neutral-300">Profile data:</strong> profile photo or display
                name if you choose to add one.
              </Bullet>
              <Bullet>
                <strong className="text-neutral-300">Watchlist data:</strong> ticker symbols and
                notes you save to your personal watchlist, synced to our cloud.
              </Bullet>
              <Bullet>
                <strong className="text-neutral-300">Payment information:</strong> when you
                subscribe to a paid plan, billing details (name, card number, billing address) are
                processed directly by our payment processor (Stripe). We do not store full card
                numbers.
              </Bullet>
              <Bullet>
                <strong className="text-neutral-300">Support communications:</strong> messages you
                send to us via email or in-app support.
              </Bullet>
            </ul>
          </SubSection>

          <SubSection title="1.2 Information collected automatically">
            <ul className="space-y-2">
              <Bullet>
                <strong className="text-neutral-300">Usage data:</strong> features used, screens
                viewed, search queries (e.g., ticker symbols searched), session duration, and
                interaction events.
              </Bullet>
              <Bullet>
                <strong className="text-neutral-300">Device information:</strong> device model, OS
                version, app version, unique device identifiers, and IP address.
              </Bullet>
              <Bullet>
                <strong className="text-neutral-300">Push notification tokens:</strong> device push
                token assigned by Apple (APNs) or Google (FCM) when you enable notifications.
              </Bullet>
              <Bullet>
                <strong className="text-neutral-300">Log data:</strong> error logs, crash reports,
                and performance metrics to diagnose bugs and improve stability.
              </Bullet>
              <Bullet>
                <strong className="text-neutral-300">Analytics data:</strong> aggregated event data
                collected via analytics tools to understand how users interact with the Service.
              </Bullet>
            </ul>
          </SubSection>

          <SubSection title="1.3 Information from third parties">
            <ul className="space-y-2">
              <Bullet>
                If you sign in using a third-party provider (e.g., Sign in with Apple or Google),
                we receive your name and email from that provider.
              </Bullet>
              <Bullet>
                Financial market data (prices, fundamentals, news) is sourced from third-party
                providers including Benzinga. We do not receive personally identifiable information
                from these data providers.
              </Bullet>
            </ul>
          </SubSection>
        </Section>

        {/* 2 */}
        <Section title="2. How We Use Your Information">
          <ul className="space-y-2">
            <Bullet>Provide, operate, and maintain the Service.</Bullet>
            <Bullet>Sync your watchlist and preferences across devices.</Bullet>
            <Bullet>Process subscription payments and send billing receipts.</Bullet>
            <Bullet>
              Send push notifications you have opted into (market alerts, earnings reminders, app
              updates).
            </Bullet>
            <Bullet>
              Generate AI-powered research reports — ticker queries are sent to our backend and
              processed by AI models; queries are not linked to identifiable profiles for model
              training without your consent.
            </Bullet>
            <Bullet>
              Analyze usage trends and improve features, performance, and user experience.
            </Bullet>
            <Bullet>
              Detect, investigate, and prevent fraud, abuse, and security incidents.
            </Bullet>
            <Bullet>
              Comply with legal obligations and enforce our Terms of Service.
            </Bullet>
            <Bullet>
              Communicate with you about product updates, new features, and promotional offers (you
              may opt out at any time).
            </Bullet>
          </ul>
        </Section>

        {/* 3 */}
        <Section title="3. Legal Bases for Processing (GDPR)">
          <p>
            If you are located in the European Economic Area (EEA) or the United Kingdom, we
            process your personal data under the following legal bases:
          </p>
          <ul className="mt-3 space-y-2">
            <Bullet>
              <strong className="text-neutral-300">Contract:</strong> processing necessary to
              provide the Service you requested (account creation, watchlist sync, subscriptions).
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">Legitimate interests:</strong> analytics,
              security, fraud prevention, and product improvement, where our interests are not
              overridden by your rights.
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">Consent:</strong> push notifications, marketing
              emails, and any optional data sharing (you may withdraw consent at any time).
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">Legal obligation:</strong> compliance with
              applicable law.
            </Bullet>
          </ul>
        </Section>

        {/* 4 */}
        <Section title="4. Sharing of Information">
          <p>
            We do <strong className="text-neutral-200">not sell</strong> your personal information.
            We share data only in these limited circumstances:
          </p>
          <ul className="mt-3 space-y-2">
            <Bullet>
              <strong className="text-neutral-300">Service providers:</strong> third-party vendors
              who process data on our behalf (cloud hosting, payment processing via Stripe,
              analytics, crash reporting, push notification delivery). These parties are
              contractually bound to protect your data and may not use it for their own purposes.
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">AI model providers:</strong> ticker queries
              entered in the AI Research feature are sent to third-party AI API providers to
              generate research reports. Queries are transmitted securely and are not used to train
              third-party models without your consent.
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">Business transfers:</strong> in connection with a
              merger, acquisition, or sale of assets, your information may be transferred. We will
              notify you before your data is subject to a different privacy policy.
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">Legal requirements:</strong> when required by law
              or to protect the rights, property, or safety of MindNestCorp, our users, or the
              public.
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">With your consent:</strong> in any other
              circumstance, with your explicit permission.
            </Bullet>
          </ul>
        </Section>

        {/* 5 */}
        <Section title="5. Third-Party Services">
          <p>The Service integrates with the following third-party providers. Their privacy practices govern their own data handling:</p>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="px-4 py-3 text-left font-medium text-neutral-300">Provider</th>
                  <th className="px-4 py-3 text-left font-medium text-neutral-300">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Stripe", "Payment processing for subscriptions"],
                  ["Benzinga", "Financial news and market data"],
                  ["Apple APNs / Google FCM", "Push notification delivery"],
                  ["Analytics provider", "Usage analytics and crash reporting"],
                  ["AI API provider", "AI-generated research reports"],
                  ["Cloud infrastructure", "Hosting, database, and storage"],
                ].map(([provider, purpose]) => (
                  <tr key={provider} className="transition-colors hover:bg-white/[0.02]">
                    <td className="px-4 py-3 font-medium text-neutral-300">{provider}</td>
                    <td className="px-4 py-3 text-neutral-500">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* 6 */}
        <Section title="6. Push Notifications">
          <p>
            With your permission, we send push notifications to your device for market alerts,
            earnings reminders, and product announcements. You can opt out at any time through:
          </p>
          <ul className="mt-3 space-y-2">
            <Bullet>Your device&apos;s notification settings (iOS Settings / Android Settings).</Bullet>
            <Bullet>The Notifications section inside the Vesto app settings.</Bullet>
          </ul>
          <p className="mt-3">
            Disabling notifications does not affect your ability to use the app.
          </p>
        </Section>

        {/* 7 */}
        <Section title="7. Subscription & Payments">
          <p>
            Vesto offers free and paid subscription tiers. Paid subscriptions are processed through
            Stripe. When you subscribe:
          </p>
          <ul className="mt-3 space-y-2">
            <Bullet>
              Your payment card details are transmitted directly to Stripe and are never stored on
              our servers.
            </Bullet>
            <Bullet>
              We store your subscription status, plan tier, and transaction history to manage your
              account.
            </Bullet>
            <Bullet>
              Stripe may use your payment information in accordance with their{" "}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4F53C] underline-offset-2 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </Bullet>
          </ul>
        </Section>

        {/* 8 */}
        <Section title="8. Data Retention">
          <ul className="space-y-2">
            <Bullet>
              We retain your account data for as long as your account is active or as needed to
              provide the Service.
            </Bullet>
            <Bullet>
              When you delete your account, we will delete or anonymize your personal data within
              <strong className="text-neutral-300"> 30 days</strong>, except where we are required
              to retain it for legal obligations (e.g., billing records for up to 7 years).
            </Bullet>
            <Bullet>
              Anonymized and aggregated analytics data may be retained indefinitely as it cannot
              identify you.
            </Bullet>
          </ul>
        </Section>

        {/* 9 */}
        <Section title="9. Your Rights & Choices">
          <SubSection title="9.1 All users">
            <ul className="space-y-2">
              <Bullet>
                <strong className="text-neutral-300">Access & correction:</strong> view and update
                your account information in the app settings at any time.
              </Bullet>
              <Bullet>
                <strong className="text-neutral-300">Account deletion:</strong> delete your account
                and associated data from the app settings or by emailing us.
              </Bullet>
              <Bullet>
                <strong className="text-neutral-300">Marketing opt-out:</strong> unsubscribe from
                promotional emails via the link in any email we send.
              </Bullet>
              <Bullet>
                <strong className="text-neutral-300">Push notifications:</strong> manage through
                device or app settings (see Section 6).
              </Bullet>
            </ul>
          </SubSection>

          <SubSection title="9.2 EEA / UK users (GDPR)">
            <p>You have the right to:</p>
            <ul className="mt-2 space-y-2">
              <Bullet>Access a copy of your personal data.</Bullet>
              <Bullet>Rectify inaccurate or incomplete data.</Bullet>
              <Bullet>Erasure (&quot;right to be forgotten&quot;) under applicable conditions.</Bullet>
              <Bullet>Restriction of processing.</Bullet>
              <Bullet>Data portability in a machine-readable format.</Bullet>
              <Bullet>Object to processing based on legitimate interests.</Bullet>
              <Bullet>Withdraw consent at any time (without affecting prior lawful processing).</Bullet>
              <Bullet>
                Lodge a complaint with your local data protection authority (e.g., ICO in the UK,
                your national DPA in the EU).
              </Bullet>
            </ul>
          </SubSection>

          <SubSection title="9.3 California users (CCPA)">
            <p>California residents have the right to:</p>
            <ul className="mt-2 space-y-2">
              <Bullet>Know what personal information we collect, use, disclose, and sell.</Bullet>
              <Bullet>Delete personal information we hold about you (subject to exceptions).</Bullet>
              <Bullet>
                Opt out of the &quot;sale&quot; of personal information.{" "}
                <strong className="text-neutral-300">
                  We do not sell personal information.
                </strong>
              </Bullet>
              <Bullet>Non-discrimination for exercising your CCPA rights.</Bullet>
            </ul>
            <p className="mt-2">
              To exercise these rights, contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[#D4F53C] underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              . We will respond within 45 days.
            </p>
          </SubSection>

          <p>
            To exercise any of the rights above, email us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[#D4F53C] underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            with the subject line &quot;Privacy Request&quot;.
          </p>
        </Section>

        {/* 10 */}
        <Section title="10. International Data Transfers">
          <p>
            MindNestCorp is based in the United States. If you access the Service from outside the
            US, your information will be transferred to and processed in the United States and
            potentially other countries where our service providers operate.
          </p>
          <p className="mt-3">
            For transfers from the EEA or UK to the US, we rely on appropriate safeguards such as
            Standard Contractual Clauses (SCCs) approved by the European Commission, or other
            lawful transfer mechanisms.
          </p>
        </Section>

        {/* 11 */}
        <Section title="11. Security">
          <p>
            We implement industry-standard security measures including encryption in transit (TLS),
            encryption at rest, access controls, and regular security reviews. However, no method
            of transmission or storage is 100% secure. We encourage you to use a strong, unique
            password and to enable device-level security features.
          </p>
          <p className="mt-3">
            In the event of a data breach that affects your rights and freedoms, we will notify you
            and applicable authorities as required by law.
          </p>
        </Section>

        {/* 12 */}
        <Section title="12. Children's Privacy">
          <p>
            The Service is not directed to children under 13 (or under 16 for users in the EEA
            under GDPR Article 8). We do not knowingly collect personal information from children
            under these ages. If we become aware that we have inadvertently collected such
            information, we will delete it promptly. If you believe a child has provided us with
            personal information, please contact us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[#D4F53C] underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>

        {/* 13 */}
        <Section title="13. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material
            changes by posting the new policy on this page with an updated effective date and, where
            appropriate, by sending an in-app notification or email. Your continued use of the
            Service after any change constitutes acceptance of the updated policy.
          </p>
        </Section>

        {/* 14 */}
        <Section title="14. Contact Us">
          <p>If you have questions, concerns, or requests regarding this Privacy Policy, please reach out:</p>
          <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] px-6 py-5">
            <p className="font-medium text-neutral-200">MindNestCorp</p>
            <p className="mt-1 text-neutral-400">
              Email:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[#D4F53C] underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-1 text-neutral-400">Subject line: &quot;Privacy Request&quot;</p>
          </div>
        </Section>

        {/* Footer nav */}
        <div className="mt-16 border-t border-white/5 pt-8 text-sm text-neutral-500">
          <p>
            Also read our{" "}
            <Link
              href="/vesto/terms"
              className="text-[#D4F53C] underline-offset-2 hover:underline"
            >
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

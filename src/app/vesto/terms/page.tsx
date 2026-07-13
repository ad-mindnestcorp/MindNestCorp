import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Vesto",
  description:
    "Read the Terms of Service governing your use of the Vesto app by MindNestCorp.",
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D4F53C]" />
      <span>{children}</span>
    </li>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#D4F53C]">
            Legal
          </p>
          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="text-sm text-neutral-500">
            Effective date: {EFFECTIVE_DATE} &nbsp;·&nbsp; Applies to: Vesto iOS &amp; Android app
            and mindnestcorp.com/vesto
          </p>
        </div>

        {/* Intro */}
        <p className="mb-10 text-[15px] leading-relaxed text-neutral-400">
          These Terms of Service (&quot;Terms&quot;) are a legally binding agreement between you
          (&quot;you&quot; or &quot;User&quot;) and MindNestCorp (&quot;we&quot;, &quot;our&quot;,
          or &quot;us&quot;) governing your access to and use of the Vesto mobile application, its
          website, and any related services (collectively, the &quot;Service&quot;). Please read
          these Terms carefully before using the Service. By creating an account, downloading the
          app, or otherwise accessing the Service, you agree to be bound by these Terms.
        </p>

        {/* Investment Disclaimer — prominent */}
        <div className="mb-14 rounded-xl border border-[#D4F53C]/30 bg-[#D4F53C]/5 px-6 py-5">
          <p className="text-base font-semibold text-[#D4F53C]">
            Important Investment Disclaimer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-300">
            Vesto is a market intelligence and data aggregation tool —{" "}
            <strong>it is not a financial advisor, broker-dealer, or investment advisor</strong>.
            All content on the Service, including AI-generated research reports, market data,
            watchlist features, news, and earnings information, is provided for{" "}
            <strong>informational and educational purposes only</strong> and does not constitute
            financial, investment, tax, or legal advice. Past performance is not indicative of
            future results. You should consult a qualified financial professional before making any
            investment decision. MindNestCorp is not registered with the SEC, FINRA, or any other
            financial regulatory authority.
          </p>
        </div>

        {/* 1 */}
        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using the Service, you represent that: (a) you are at least 13 years of
            age (or 16 years of age if you are in the EEA); (b) you have the legal capacity to
            enter into a binding contract; and (c) your use of the Service does not violate any
            applicable law or regulation.
          </p>
          <p>
            If you are using the Service on behalf of an organization, you represent that you have
            the authority to bind that organization to these Terms.
          </p>
          <p>
            If you do not agree to these Terms, you must not access or use the Service.
          </p>
        </Section>

        {/* 2 */}
        <Section title="2. Description of Service">
          <p>
            Vesto is an AI-powered stock market intelligence mobile application that provides:
          </p>
          <ul className="mt-3 space-y-2">
            <Bullet>Real-time and delayed market data (prices, indices, sector performance).</Bullet>
            <Bullet>Personalized watchlists with technical indicators.</Bullet>
            <Bullet>AI-generated research reports for individual securities.</Bullet>
            <Bullet>Financial news aggregated from third-party providers including Benzinga.</Bullet>
            <Bullet>Earnings calendar with EPS estimates and reporting schedules.</Bullet>
          </ul>
          <p className="mt-3">
            The Service is available in free and paid subscription tiers. Features available on
            each tier may change at our discretion with reasonable notice.
          </p>
        </Section>

        {/* 3 */}
        <Section title="3. User Accounts">
          <p>
            To access certain features of the Service, you must create an account. You agree to:
          </p>
          <ul className="mt-3 space-y-2">
            <Bullet>Provide accurate, current, and complete information during registration.</Bullet>
            <Bullet>Maintain and promptly update your account information.</Bullet>
            <Bullet>
              Keep your password confidential and not share it with any third party.
            </Bullet>
            <Bullet>
              Notify us immediately at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[#D4F53C] underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              if you suspect unauthorized access to your account.
            </Bullet>
            <Bullet>
              Take responsibility for all activity that occurs under your account.
            </Bullet>
          </ul>
          <p className="mt-3">
            We reserve the right to suspend or terminate accounts that violate these Terms or are
            inactive for an extended period, with reasonable prior notice where practicable.
          </p>
        </Section>

        {/* 4 */}
        <Section title="4. Subscription & Payments">
          <p>
            Vesto offers a free tier and one or more paid subscription plans
            (&quot;Subscription&quot;). The following terms apply to paid Subscriptions:
          </p>
          <ul className="mt-3 space-y-2">
            <Bullet>
              <strong className="text-neutral-300">Billing:</strong> Subscription fees are billed in
              advance on a recurring basis (monthly or annually, as selected). All charges are
              processed by Stripe.
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">Automatic renewal:</strong> Subscriptions
              automatically renew at the end of each billing period unless cancelled before the
              renewal date.
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">Price changes:</strong> We will provide at least
              30 days&apos; notice before increasing Subscription prices. Continued use after a
              price change takes effect constitutes acceptance of the new price.
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">Cancellation:</strong> You may cancel your
              Subscription at any time through the app settings or by contacting us. Cancellation
              takes effect at the end of the current billing period.
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">Refunds:</strong> Subscription fees are
              non-refundable except as required by applicable law or at our sole discretion. If you
              are based in the EU, you have a 14-day statutory right of withdrawal for digital
              services, waived upon commencement of the service.
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">Taxes:</strong> Prices are exclusive of
              applicable taxes. You are responsible for any sales, use, VAT, or other taxes imposed
              on your Subscription.
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">Failed payments:</strong> If a payment fails, we
              may downgrade your account to the free tier after a grace period and reasonable
              notification.
            </Bullet>
          </ul>
        </Section>

        {/* 5 */}
        <Section title="5. Acceptable Use">
          <p>You agree not to use the Service to:</p>
          <ul className="mt-3 space-y-2">
            <Bullet>
              Violate any applicable local, state, national, or international law or regulation.
            </Bullet>
            <Bullet>
              Engage in, facilitate, or promote market manipulation, insider trading, or any other
              unlawful financial activity.
            </Bullet>
            <Bullet>
              Scrape, crawl, or systematically extract data from the Service without our express
              written consent.
            </Bullet>
            <Bullet>
              Reverse engineer, decompile, disassemble, or attempt to derive the source code of the
              Service.
            </Bullet>
            <Bullet>
              Interfere with or disrupt the integrity or performance of the Service or its
              infrastructure.
            </Bullet>
            <Bullet>
              Transmit malware, viruses, or any other malicious code.
            </Bullet>
            <Bullet>
              Impersonate any person or entity or misrepresent your affiliation with any person or
              entity.
            </Bullet>
            <Bullet>
              Use the Service for any purpose that is harmful, fraudulent, deceptive, or abusive.
            </Bullet>
            <Bullet>
              Create multiple accounts to circumvent free-tier limitations or any imposed
              restrictions.
            </Bullet>
          </ul>
          <p className="mt-3">
            We reserve the right to investigate and take appropriate action for violations,
            including suspension or termination of access.
          </p>
        </Section>

        {/* 6 */}
        <Section title="6. Intellectual Property">
          <p>
            All content, features, and functionality of the Service — including but not limited to
            text, graphics, logos, UI design, AI-generated reports, software, and underlying
            technology — are owned by MindNestCorp or its licensors and are protected by copyright,
            trademark, and other intellectual property laws.
          </p>
          <p className="mt-3">
            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable,
            revocable license to access and use the Service for your personal, non-commercial
            purposes.
          </p>
          <p className="mt-3">
            You may not copy, modify, distribute, sell, sublicense, or create derivative works
            based on the Service or its content without our prior written permission.
          </p>
          <p className="mt-3">
            &quot;Vesto&quot; and the Vesto logo are trademarks of MindNestCorp. Nothing in these
            Terms grants you any right to use our trademarks, logos, or trade names.
          </p>
        </Section>

        {/* 7 */}
        <Section title="7. Third-Party Content & Services">
          <p>
            The Service includes content, data, and links from third-party providers (including
            Benzinga for financial news and market data providers for pricing information). This
            content is provided for informational purposes only.
          </p>
          <ul className="mt-3 space-y-2">
            <Bullet>
              We do not endorse and are not responsible for the accuracy, completeness, timeliness,
              or reliability of any third-party content.
            </Bullet>
            <Bullet>
              Market data may be delayed and is not guaranteed to be real-time unless explicitly
              stated.
            </Bullet>
            <Bullet>
              Links to third-party websites are provided for convenience only. We have no control
              over and assume no responsibility for their content, privacy policies, or practices.
            </Bullet>
          </ul>
        </Section>

        {/* 8 */}
        <Section title="8. AI-Generated Research">
          <p>
            Vesto uses artificial intelligence to generate research reports on individual securities.
            You acknowledge and agree that:
          </p>
          <ul className="mt-3 space-y-2">
            <Bullet>
              AI-generated reports are produced algorithmically and may contain errors,
              inaccuracies, or outdated information.
            </Bullet>
            <Bullet>
              Reports are for informational purposes only and do not constitute a recommendation to
              buy, sell, or hold any security.
            </Bullet>
            <Bullet>
              You should independently verify all information before making any financial decision.
            </Bullet>
            <Bullet>
              We do not guarantee the accuracy, completeness, or fitness for any particular purpose
              of AI-generated content.
            </Bullet>
          </ul>
        </Section>

        {/* 9 */}
        <Section title="9. Disclaimers">
          <p>
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p className="mt-3">
            WE DO NOT WARRANT THAT: (A) THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE;
            (B) ANY DATA OR CONTENT ACCESSED THROUGH THE SERVICE IS ACCURATE, COMPLETE, OR
            CURRENT; OR (C) DEFECTS WILL BE CORRECTED.
          </p>
          <p className="mt-3">
            MARKET DATA, NEWS, EARNINGS INFORMATION, AND AI-GENERATED RESEARCH ARE PROVIDED FOR
            INFORMATIONAL PURPOSES ONLY. WE MAKE NO REPRESENTATIONS REGARDING INVESTMENT OUTCOMES.
          </p>
          <p className="mt-3">
            Some jurisdictions do not allow the exclusion of implied warranties, so some of the
            above limitations may not apply to you.
          </p>
        </Section>

        {/* 10 */}
        <Section title="10. Limitation of Liability">
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MINDNESTCORP AND ITS OFFICERS,
            DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, DATA, OR
            GOODWILL — ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE
            SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p className="mt-3">
            IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF
            OR RELATING TO THESE TERMS OR THE SERVICE EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT
            YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) USD $50.
          </p>
          <p className="mt-3">
            Some jurisdictions do not allow the limitation of certain damages, so some of the above
            limitations may not apply to you. In such jurisdictions, our liability is limited to the
            fullest extent permitted by law.
          </p>
        </Section>

        {/* 11 */}
        <Section title="11. Indemnification">
          <p>
            You agree to indemnify, defend, and hold harmless MindNestCorp and its officers,
            directors, employees, and agents from and against any claims, liabilities, damages,
            losses, and expenses (including reasonable attorneys&apos; fees) arising out of or
            related to: (a) your use of the Service; (b) your violation of these Terms; (c) your
            violation of any third-party rights; or (d) your violation of any applicable law.
          </p>
        </Section>

        {/* 12 */}
        <Section title="12. Governing Law">
          <p>
            These Terms are governed by and construed in accordance with the laws of the State of
            Delaware, United States, without regard to its conflict-of-law provisions.
          </p>
          <p className="mt-3">
            If you are a consumer located in the European Union, you also benefit from any
            mandatory provisions of the law of your country of residence, and nothing in these
            Terms limits your rights under applicable consumer protection laws.
          </p>
        </Section>

        {/* 13 */}
        <Section title="13. Dispute Resolution & Arbitration">
          <p>
            Please read this section carefully — it affects your legal rights.
          </p>
          <p className="mt-3">
            <strong className="text-neutral-300">Informal resolution:</strong> Before initiating
            any formal dispute, you agree to first contact us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[#D4F53C] underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            and attempt to resolve the dispute informally for at least 30 days.
          </p>
          <p className="mt-3">
            <strong className="text-neutral-300">Binding arbitration:</strong> If informal
            resolution fails, any dispute, claim, or controversy arising out of or relating to these
            Terms or the Service shall be resolved by binding arbitration administered by the
            American Arbitration Association (AAA) under its Consumer Arbitration Rules, rather than
            in court, except for claims that may be brought in small claims court.
          </p>
          <p className="mt-3">
            <strong className="text-neutral-300">Class action waiver:</strong> You agree to resolve
            disputes on an individual basis only. You waive any right to participate in a class,
            collective, or representative action.
          </p>
          <p className="mt-3">
            <strong className="text-neutral-300">EU / UK users:</strong> If you are a consumer in
            the EU or UK, you retain the right to bring claims before the courts of your country of
            residence and to use the EU Online Dispute Resolution platform (
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4F53C] underline-offset-2 hover:underline"
            >
              ec.europa.eu/consumers/odr
            </a>
            ).
          </p>
        </Section>

        {/* 14 */}
        <Section title="14. Termination">
          <p>
            We may suspend or terminate your access to the Service at any time, with or without
            cause, with reasonable notice where practicable. Grounds for termination include, but
            are not limited to, violation of these Terms or conduct we determine to be harmful to
            other users or the Service.
          </p>
          <p className="mt-3">
            You may terminate your account at any time through the app settings. Upon termination,
            your right to use the Service immediately ceases. Sections 6, 9, 10, 11, 12, and 13
            survive termination.
          </p>
        </Section>

        {/* 15 */}
        <Section title="15. Changes to Terms">
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of
            material changes by updating the effective date, posting a notice in the app, or
            sending you an email. Changes become effective upon posting unless otherwise stated.
          </p>
          <p className="mt-3">
            Your continued use of the Service after the effective date of any changes constitutes
            your acceptance of the revised Terms. If you do not agree to the updated Terms, you
            must stop using the Service.
          </p>
        </Section>

        {/* 16 */}
        <Section title="16. Miscellaneous">
          <ul className="space-y-2">
            <Bullet>
              <strong className="text-neutral-300">Entire agreement:</strong> These Terms, together
              with our{" "}
              <Link
                href="/vesto/privacy"
                className="text-[#D4F53C] underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>
              , constitute the entire agreement between you and MindNestCorp regarding the Service.
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">Severability:</strong> If any provision of these
              Terms is found to be unenforceable, that provision will be modified to the minimum
              extent necessary to make it enforceable, and the remaining provisions will continue in
              full force.
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">Waiver:</strong> Failure to enforce any right
              under these Terms does not constitute a waiver of that right.
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">Assignment:</strong> You may not assign or
              transfer these Terms without our prior written consent. We may assign our rights and
              obligations without restriction.
            </Bullet>
            <Bullet>
              <strong className="text-neutral-300">Force majeure:</strong> We are not liable for
              any failure or delay caused by events beyond our reasonable control, including natural
              disasters, government actions, or internet disruptions.
            </Bullet>
          </ul>
        </Section>

        {/* 17 */}
        <Section title="17. Contact Us">
          <p>If you have questions about these Terms, please contact us:</p>
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
            <p className="mt-1 text-neutral-400">Subject line: &quot;Terms Inquiry&quot;</p>
          </div>
        </Section>

        {/* Footer nav */}
        <div className="mt-16 border-t border-white/5 pt-8 text-sm text-neutral-500">
          <p>
            Also read our{" "}
            <Link
              href="/vesto/privacy"
              className="text-[#D4F53C] underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

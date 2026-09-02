export const metadata = { title: "Terms of Use — Dosely" };

export default function Terms() {
  return (
    <main>
      <h1>Terms of Use</h1>
      <p className="updated">Last updated 2 September 2026</p>

      <p className="lede">
        Dosely is licensed, not sold, under Apple&rsquo;s Standard End User License Agreement.
        The terms below say what that means in practice and what you are buying.
      </p>

      <h2>The licence</h2>
      <p>
        Use of Dosely is governed by Apple&rsquo;s{" "}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
          Standard End User License Agreement
        </a>
        , which applies in full.
      </p>

      <h2>What you are buying</h2>
      <ul>
        <li>
          <strong>Weekly</strong> — an auto-renewing subscription. It renews at the end of each
          week until you cancel it.
        </li>
        <li>
          <strong>Lifetime</strong> — a one-time purchase. It does not renew and is not billed
          again.
        </li>
      </ul>
      <p>
        Prices are shown in the app in your own currency, as set in the App Store. Payment is
        charged to your Apple Account at confirmation of purchase.
      </p>

      <h2>Renewal and cancellation</h2>
      <p>
        A weekly subscription renews automatically unless it is cancelled at least 24 hours before
        the end of the current period. Your Apple Account is charged for renewal within 24 hours
        before the period ends. You can manage or cancel it at any time in{" "}
        <strong>Settings › your name › Subscriptions</strong> on your device; cancelling stops the
        next renewal and does not refund the current period.
      </p>
      <p>
        Refunds are handled by Apple, not by us, through{" "}
        <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
      </p>

      <h2>Restoring a purchase</h2>
      <p>
        A purchase belongs to your Apple Account, not to a device. <strong>Restore purchases</strong>{" "}
        on the paywall brings it back on any device signed in to the same account. You are never
        asked to pay twice.
      </p>

      <h2>Dosely is not medical advice</h2>
      <p>
        Dosely is a personal organiser. It does not diagnose, treat, advise, or calculate a dose,
        and it is not a medical device. It records what you tell it and reminds you of what you
        scheduled. <strong>Always confirm your dosing with a clinician or pharmacist.</strong> Do
        not rely on Dosely as the only safeguard for a dose that matters clinically.
      </p>

      <h2>Alarms depend on the device</h2>
      <p>
        Dosely schedules alarms with iOS. Whether one sounds depends on the device: permission,
        battery, being switched off, or the operating system deciding otherwise. Dosely does what
        it can and cannot promise more than the platform does.
      </p>

      <h2>Your data</h2>
      <p>
        What you enter stays on your device — see the{" "}
        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/privacy/`}>privacy policy</a>. Because
        nothing is stored on a server, there is no copy for us to restore if you delete the app or
        lose the device.
      </p>

      <h2>Changes</h2>
      <p>
        If these terms change, the date at the top changes with them, and the previous wording
        stays in this page&rsquo;s history on GitHub.
      </p>
    </main>
  );
}

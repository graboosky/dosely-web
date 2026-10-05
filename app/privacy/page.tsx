export const metadata = { title: "Privacy Policy — Pill Alarm" };

export default function Privacy() {
  return (
    <main>
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated 5 October 2026</p>

      <p className="lede">
        Pill Alarm keeps what you enter on your iPhone. It has no account, no tracking and no server
        of its own, and it does not send your medications, doses or history anywhere.
      </p>

      <h2>What Pill Alarm stores, and where</h2>
      <p>
        Everything you type — the medications you take, their schedules, your notes, your stock
        counts and the record of what you took, skipped or missed — is written to a file inside
        the app&rsquo;s own container on your device. It is covered by the same device encryption
        as the rest of your iPhone. It is not uploaded, backed up to us, or shared with anyone.
      </p>
      <p>
        If you have iCloud Backup switched on for your iPhone, that backup is made by Apple under{" "}
        <a href="https://www.apple.com/legal/privacy/">Apple&rsquo;s privacy policy</a>, not by us.
        Pill Alarm itself does not sync anything.
      </p>

      <h2>What Pill Alarm does not do</h2>
      <ul>
        <li>No account and no sign-in. There is nothing to register.</li>
        <li>No analytics of how you use the app, no crash reporting, no advertising identifier, no tracking.</li>
        <li>No ads in the app, and no selling of data. There is nothing to sell.</li>
        <li>No third-party SDK that receives your medications, doses or history.</li>
      </ul>

      <h2>What leaves your device</h2>
      <p>
        Buying Pill Alarm, and restoring a purchase you already made, goes through the App Store. Apple
        handles the payment. What Apple does with purchase data is described in{" "}
        <a href="https://www.apple.com/legal/privacy/">Apple&rsquo;s privacy policy</a>.
      </p>
      <p>
        We also use <a href="https://www.revenuecat.com/privacy/">RevenueCat</a> to keep track of
        whether a purchase is active. That is what lets a purchase follow your Apple Account —
        so reinstalling the app, or installing it on a second device, does not ask you to pay
        again. RevenueCat receives an anonymous identifier and the fact that this app was bought.
      </p>
      <p>
        If you installed Pill Alarm after tapping an ad for it on the App Store, Apple can tell the
        app which ad that was. Pill Alarm passes Apple&rsquo;s attribution token to RevenueCat, and
        RevenueCat asks Apple for the campaign, ad group and search keyword behind the install
        &mdash; for example, that it followed a search for &ldquo;pill reminder&rdquo;. If the
        install did not come from an ad, Apple says so and nothing more. This is Apple&rsquo;s own
        ad attribution: it uses no advertising identifier, combines nothing with data from other
        companies, and is not tracking, which is why Pill Alarm never asks for permission to track
        you. We use it to see which searches bring people who keep the app, so the ad budget goes
        there.
      </p>
      <p>
        <strong>Neither Apple nor RevenueCat is told anything about your medications, your doses,
        your schedule or your history.</strong> None of it is ever sent anywhere. What leaves the
        device is that a purchase happened, and which ad &mdash; if any &mdash; led to the install.
        Nothing about why.
      </p>

      <h2>Notifications and alarms</h2>
      <p>
        Alarms and refill reminders are scheduled by iOS on your device from the data already
        stored there. Nothing is sent to a push server; Pill Alarm does not use remote notifications.
      </p>

      <h2>Your calendar</h2>
      <p>
        While the Care tab is open, Pill Alarm reads your iPhone&rsquo;s calendar on the device to
        recognise an upcoming visit with someone in your clinician book, and show when it is. This
        happens locally and only while that tab is open — nothing from your calendar is stored or
        sent anywhere.
      </p>

      <h2>Children</h2>
      <p>
        Pill Alarm is not directed at children and collects nothing that would identify anyone,
        of any age.
      </p>

      <h2>Your data is yours</h2>
      <p>
        Because your medications and history never leave your device, there is nothing of them
        for us to hand over, correct or delete on your behalf. <strong>Settings › Delete all data</strong> removes every
        medication and every log entry from the iPhone, and deleting the app removes the file
        entirely.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, the date at the top changes with it, and the previous wording stays
        in this page&rsquo;s history on GitHub.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy go to{" "}
        <a href="https://github.com/graboosky/dosely-web/issues">the project&rsquo;s issue tracker</a>.
      </p>
    </main>
  );
}

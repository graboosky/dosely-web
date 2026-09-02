export const metadata = { title: "Privacy Policy — Dosely" };

export default function Privacy() {
  return (
    <main>
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated 2 September 2026</p>

      <p className="lede">
        Dosely keeps what you enter on your iPhone. It has no account, no analytics and no server
        of its own, and it does not send your medications, doses or history anywhere.
      </p>

      <h2>What Dosely stores, and where</h2>
      <p>
        Everything you type — the medications you take, their schedules, your notes, your stock
        counts and the record of what you took, skipped or missed — is written to a file inside
        the app&rsquo;s own container on your device. It is covered by the same device encryption
        as the rest of your iPhone. It is not uploaded, backed up to us, or shared with anyone.
      </p>
      <p>
        If you have iCloud Backup switched on for your iPhone, that backup is made by Apple under{" "}
        <a href="https://www.apple.com/legal/privacy/">Apple&rsquo;s privacy policy</a>, not by us.
        Dosely itself does not sync anything.
      </p>

      <h2>What Dosely does not do</h2>
      <ul>
        <li>No account and no sign-in. There is nothing to register.</li>
        <li>No analytics, no crash reporting, no advertising identifier, no tracking of any kind.</li>
        <li>No advertising, and no selling or sharing of data. There is nothing to sell.</li>
        <li>No third-party SDK that receives your data.</li>
      </ul>

      <h2>The one thing that leaves your device</h2>
      <p>
        Buying Dosely, and restoring a purchase you already made, goes through the App Store.
        Apple handles the payment and tells the app whether a purchase is active. Apple is not told
        anything about your medications, doses or history — it is told that this app was bought.
        What Apple does with purchase data is described in{" "}
        <a href="https://www.apple.com/legal/privacy/">Apple&rsquo;s privacy policy</a>.
      </p>
      <p>
        There is no third-party purchase or receipt service in between. Nobody but Apple learns
        that you bought Dosely.
      </p>

      <h2>Notifications and alarms</h2>
      <p>
        Alarms and refill reminders are scheduled by iOS on your device from the data already
        stored there. Nothing is sent to a push server; Dosely does not use remote notifications.
      </p>

      <h2>Children</h2>
      <p>
        Dosely is not directed at children and collects nothing that would identify anyone,
        of any age.
      </p>

      <h2>Your data is yours</h2>
      <p>
        Because nothing leaves your device, there is nothing for us to hand over, correct or
        delete on your behalf. <strong>Settings › Delete all data</strong> removes every
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

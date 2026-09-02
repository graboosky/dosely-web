export const metadata = { title: "Support — Dosely" };

export default function Support() {
  return (
    <main>
      <h1>Support</h1>
      <p className="lede">
        Something not working, or a language reading badly? Say so and it gets fixed.
      </p>

      <div className="card">
        <h2>Get in touch</h2>
        <p>
          Open an issue at{" "}
          <a href="https://github.com/graboosky/dosely-web/issues">
            github.com/graboosky/dosely-web/issues
          </a>
          . Include the device, the iOS version, and the language you were using — a bug that only
          appears in one language is common and easy to fix once it is named.
        </p>
      </div>

      <h2>Things that are usually this</h2>
      <ul>
        <li>
          <strong>No alarm rang.</strong> Check <strong>Settings › Alarms</strong> in Dosely. If it
          says <em>Off</em>, iOS has not been given permission to schedule alarms.
        </li>
        <li>
          <strong>You paid but Dosely still asks.</strong> Tap <strong>Restore purchases</strong> on
          the paywall, signed in to the Apple Account you bought with.
        </li>
        <li>
          <strong>A dose is marked missed that you took.</strong> Open{" "}
          <strong>History</strong>, pick the day, and mark it taken. The record is editable.
        </li>
        <li>
          <strong>Cancelling the weekly plan.</strong>{" "}
          <strong>Settings › your name › Subscriptions</strong> on your device — Apple manages it,
          not Dosely.
        </li>
      </ul>

      <h2>Not a clinical service</h2>
      <p>
        Dosely does not give medical advice and cannot answer questions about your medication.
        Those belong with a clinician or pharmacist.
      </p>
    </main>
  );
}

export default function Home() {
  return (
    <main>
      <h1>Take what you meant to take.</h1>
      <p className="lede">
        Dosely is a calm place for the things you take every day — prescriptions, vitamins and
        supplements — and a record of whether you took them.
      </p>

      <div className="card">
        <h2>What it does</h2>
        <ul>
          <li>Rings a real alarm for every scheduled dose, through silent mode and Focus.</li>
          <li>Logs a dose in one tap — from the alarm, the Lock Screen widget, or the day&rsquo;s list.</li>
          <li>Keeps a history you can read back, day by day.</li>
          <li>Says quietly when a medication is running low.</li>
          <li>Speaks fifteen languages.</li>
        </ul>
      </div>

      <h2>Everything stays on your iPhone</h2>
      <p>
        Dosely has no account, no analytics and no server of its own. The only thing that leaves
        your device is the purchase. See the{" "}
        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/privacy/`}>privacy policy</a>.
      </p>

      <h2>Not medical advice</h2>
      <p>
        Dosely is a personal organiser, not a medical device. It does not diagnose, advise or
        calculate a dose. Confirm your dosing with a clinician or pharmacist.
      </p>
    </main>
  );
}

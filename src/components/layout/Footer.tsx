export default function Footer() {
  return (
    <footer className="mt-8 mb-24 rounded-2xl border border-red-700/20 bg-[#101010] p-5">

      <div className="grid grid-cols-3 gap-4 text-center">

        <div>
          <h3 className="mb-2 font-bold text-red-500">ACCOUNT</h3>
          <ul className="space-y-1 text-xs text-gray-400">
            <li>Login</li>
            <li>Register</li>
            <li>Orders</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 font-bold text-red-500">COMPANY</h3>
          <ul className="space-y-1 text-xs text-gray-400">
            <li>About</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 font-bold text-red-500">POLICY</h3>
          <ul className="space-y-1 text-xs text-gray-400">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Refund</li>
          </ul>
        </div>

      </div>

      <div className="mt-6 border-t border-red-700/20 pt-5 text-center">
        <h2 className="text-2xl font-black text-white">
          AATMA <span className="text-red-500">HUB</span>
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          Gaming Top-Up Platform
        </p>

        <p className="mt-4 text-[11px] text-gray-500">
          © 2026 AATMA HUB. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

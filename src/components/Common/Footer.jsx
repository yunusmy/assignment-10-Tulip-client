

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-8 px-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm text-gray-300">
            MyCampaigns is a platform where you can start a campaign to support
            your dreams or contribute to causes you care about. Join us in
            making a difference!
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a
                href="/"
                className="text-sm text-gray-300 hover:text-yellow-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/campaigns"
                className="text-sm text-gray-300 hover:text-yellow-400"
              >
                All Campaigns
              </a>
            </li>
            <li>
              <a
                href="/addCampaign"
                className="text-sm text-gray-300 hover:text-yellow-400"
              >
                Add Campaign
              </a>
            </li>
            <li>
              <a
                href="/myDonations"
                className="text-sm text-gray-300 hover:text-yellow-400"
              >
                My Donations
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul>
            <li className="text-sm text-gray-300">
              <span className="font-bold">Email:</span> support@mycampaigns.com
            </li>
            <li className="text-sm text-gray-300">
              <span className="font-bold">Phone:</span> +1 (555) 123-4567
            </li>
            <li className="text-sm text-gray-300">
              <span className="font-bold">Address:</span> 123 Campaign Lane,
              DreamCity, USA
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} MyCampaigns. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

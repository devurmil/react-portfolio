import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [open, setOpen] = React.useState(null);

  return (
    <>
      <footer class="fixed bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] mb-1 bg-slate-900/50 backdrop-blur-md max-w-6xl rounded-xl shadow-xs border border-white/10 text-gray-300">
        <div class="w-full mx-auto max-w-screen-xl px-6 p-4 flex items-center justify-between">
          <span class="text-sm text-gray-400 ">© 2025 Urmil. All rights reserved.</span>
          <ul class="flex flex-wrap gap-4 text-sm font-medium text-gray-400">
            <li>
              <button onClick={() => setOpen("privacy")} className="hover:underline">
                Privacy Policy
              </button>
            </li>
            <li>
              <button onClick={() => setOpen("terms")} className="hover:underline">
                Terms & Conditions
              </button>
            </li>
            <li>
              <button onClick={() => setOpen("licensing")} className="hover:underline">
                Licensing
              </button>
            </li>
          </ul>
        </div>
      </footer>

      {open && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
          onClick={() => setOpen(null)}
          >
          <div className='bg-white/30 backdrop-blur-sm rounded-xl p-6 max-w-md w-full shadow-lg'
          onClick={(e) => e.stopPropagation()}
          >

            <h2 className='text-2xl font-semibold mb-3 capitalize'>
              {open.replace("-", " ")}
            </h2>

            <div className='text-sm text-gray-100 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar'>
              {open === "privacy" && (
                <div className="space-y-4">
                  <p>This portfolio website is owned and maintained by Urmil.</p>
                  <p>I respect your privacy and am committed to protecting any personal information you may share while using this website.</p>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Information Collection</h3>
                    <p>This website does not collect personal data automatically.</p>
                    <p>Information is collected only if you voluntarily provide it (for example, through a contact form or email).</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Use of Information</h3>
                    <p>Any information you share will be used solely to:</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Respond to your inquiries</li>
                      <li>Communicate regarding projects or collaborations</li>
                    </ul>
                    <p className="mt-2">Your information will never be sold, shared, or misused.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Cookies</h3>
                    <p>This website may use basic cookies only for:</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Improving user experience</li>
                      <li>Website performance analytics</li>
                    </ul>
                    <p className="mt-2">No sensitive personal data is stored.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Third-Party Links</h3>
                    <p>This website may contain links to third-party platforms (e.g., GitHub, LinkedIn).</p>
                    <p>I am not responsible for the privacy practices of external websites.</p>
                  </div>
                </div>
              )}

              {open === "terms" && (
                <div className="space-y-4">
                  <p>By accessing this website, you agree to the following terms:</p>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Use of Content</h3>
                    <p>All content on this portfolio (projects, text, designs, and code snippets) is for informational and demonstration purposes only.</p>

                    <p className="mt-2 text-gray-900 font-medium">You may:</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>View and share links to this website</li>
                    </ul>

                    <p className="mt-2 text-gray-900 font-medium">You may not:</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Copy, reproduce, or redistribute content without permission</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Accuracy of Information</h3>
                    <p>While I strive to keep information accurate and updated, I make no guarantees regarding completeness or correctness.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">External Links</h3>
                    <p>This website may include links to external websites.</p>
                    <p>I am not responsible for the content or availability of those sites.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Changes to Terms</h3>
                    <p>These terms may be updated at any time without prior notice.</p>
                  </div>
                </div>
              )}

              {open === "licensing" && (
                <div className="space-y-4">
                  <p>Unless otherwise stated, all content on this portfolio is licensed under:</p>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">All Rights Reserved</h3>
                    <p>This includes:</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Website design</li>
                      <li>Text content</li>
                      <li>Project descriptions</li>
                      <li>Custom code</li>
                    </ul>
                    <p className="mt-2">You may not reuse or redistribute any material without explicit permission.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Open-Source Projects</h3>
                    <p>Some projects showcased may be open-source and governed by their respective licenses (e.g., MIT, Apache 2.0).</p>
                    <p>Please refer to individual project repositories for specific licensing details.</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 text-right">
              <button onClick={() => setOpen(null)} className='text-sm bg-black hover:opacity-90 text-white px-4 py-2 rounded-lg'>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer
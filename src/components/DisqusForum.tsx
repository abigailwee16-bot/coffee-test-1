import React, { useEffect } from 'react';

export const DisqusForum: React.FC = () => {
  useEffect(() => {
    try {
      // Define global Disqus config
      (window as any).disqus_config = function (this: any) {
        this.page.url = window.location.href;
        this.page.identifier = window.location.pathname;
      };

      // Inject Disqus comment embed script
      const embedScriptId = 'disqus-embed-script';
      if (!document.getElementById(embedScriptId)) {
        const d = document;
        const s = d.createElement('script');
        s.id = embedScriptId;
        s.src = 'https://abs-smu.disqus.com/embed.js';
        s.setAttribute('data-timestamp', String(+new Date()));
        s.onerror = (e) => {
          console.warn('Disqus script loading error:', e);
        };
        (d.head || d.body).appendChild(s);
      } else if ((window as any).DISQUS) {
        // Re-initialize Disqus if it already loaded
        (window as any).DISQUS.reset({
          reload: true,
          config: function (this: any) {
            this.page.url = window.location.href;
            this.page.identifier = window.location.pathname;
          }
        });
      }

      // Inject Disqus comment count script
      const countScriptId = 'dsq-count-scr';
      if (!document.getElementById(countScriptId)) {
        const s = document.createElement('script');
        s.id = countScriptId;
        s.src = 'https://abs-smu.disqus.com/count.js';
        s.async = true;
        s.onerror = (e) => {
          console.warn('Disqus count script loading error:', e);
        };
        (document.head || document.body).appendChild(s);
      }
    } catch (err) {
      console.warn('Error initializing Disqus:', err);
    }
  }, []);

  return (
    <section id="discussion-forum-section" className="w-full bg-white py-16 border-t border-[#c3c8bd]/30">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-10">
        <div className="mb-8 flex flex-col gap-2">
          <span className="font-label-md text-label-md text-[#434840] uppercase tracking-wider">
            Community & Feedback
          </span>
          <h2 className="font-headline-md text-headline-md text-[#282526]">
            Discussion Forum
          </h2>
          <p className="font-body-md text-body-md text-[#434840]">
            Share your thoughts, ask about our roast profiles, or leave comments for our community baristas below.
          </p>
        </div>

        {/* Disqus Embed Container */}
        <div className="bg-[#f9f9f9] p-6 rounded-xl border border-[#c3c8bd]/30 min-h-[250px]">
          <div id="disqus_thread"></div>
          <noscript>
            Please enable JavaScript to view the{' '}
            <a href="https://disqus.com/?ref_noscript" className="text-[#223f1e] underline">
              comments powered by Disqus.
            </a>
          </noscript>
        </div>
      </div>
    </section>
  );
};

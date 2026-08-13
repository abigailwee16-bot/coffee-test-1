import React, { useEffect, useState } from 'react';

interface LocalComment {
  id: string;
  author: string;
  avatar: string;
  time: string;
  content: string;
  likes: number;
}

export const DisqusForum: React.FC = () => {
  const [scriptFailed, setScriptFailed] = useState(false);
  const [comments, setComments] = useState<LocalComment[]>([
    {
      id: 'c1',
      author: 'CoffeeEnthusiast_SG',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      time: '2 hours ago',
      content: 'Tried the Smoky Quartz Capsules at the new Novena outlet! The rich dark roast notes are phenomenal.',
      likes: 12,
    },
    {
      id: 'c2',
      author: 'Marcus Tan',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      time: 'Yesterday',
      content: 'Any recommendations for cold brew beans? Looking for something fruity with bright acidity.',
      likes: 5,
    },
  ]);
  const [newAuthor, setNewAuthor] = useState('');
  const [newComment, setNewComment] = useState('');

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
        s.onerror = () => {
          setScriptFailed(true);
        };
        (d.head || d.body).appendChild(s);
      } else if ((window as any).DISQUS) {
        try {
          (window as any).DISQUS.reset({
            reload: true,
            config: function (this: any) {
              this.page.url = window.location.href;
              this.page.identifier = window.location.pathname;
            }
          });
        } catch {
          setScriptFailed(true);
        }
      }

      // Inject Disqus comment count script
      const countScriptId = 'dsq-count-scr';
      if (!document.getElementById(countScriptId)) {
        const s = document.createElement('script');
        s.id = countScriptId;
        s.src = 'https://abs-smu.disqus.com/count.js';
        s.async = true;
        s.onerror = () => {
          // non-critical
        };
        (document.head || document.body).appendChild(s);
      }
    } catch {
      setScriptFailed(true);
    }
  }, []);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const added: LocalComment = {
        id: `local-${Date.now()}`,
        author: newAuthor.trim() || 'Guest Barista',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
        time: 'Just now',
        content: newComment.trim(),
        likes: 1,
      };
      setComments([added, ...comments]);
      setNewComment('');
      setNewAuthor('');
    }
  };

  const handleLike = (id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

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
          
          {/* Fallback local forum UI if Disqus embed fails to render or load */}
          {scriptFailed && (
            <div className="space-y-6">
              <div className="p-4 bg-[#223f1e]/10 border border-[#223f1e]/20 rounded-lg flex items-center gap-3 text-[#223f1e] text-xs font-label-md">
                <span className="material-symbols-outlined text-[20px]">forum</span>
                <span>Tiong Hoe Community Discussion (Interactive Standin Mode)</span>
              </div>

              {/* Comment Input Form */}
              <form onSubmit={handleAddComment} className="space-y-3 bg-white p-4 rounded-lg border border-[#c3c8bd]/30 shadow-2xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name / Handle (optional)"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="px-3 py-2 border border-[#c3c8bd] rounded text-xs font-body-md outline-none focus:border-[#223f1e]"
                  />
                </div>
                <textarea
                  rows={3}
                  required
                  placeholder="Join the discussion... share your brewing recipe or ask a question!"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full px-3 py-2 border border-[#c3c8bd] rounded text-xs font-body-md outline-none focus:border-[#223f1e] resize-none"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#223f1e] hover:bg-[#385633] text-white font-label-md text-xs uppercase tracking-wider rounded cursor-pointer transition-colors"
                >
                  Post Comment
                </button>
              </form>

              {/* Comment Thread */}
              <div className="space-y-3">
                {comments.map((c) => (
                  <div key={c.id} className="bg-white p-4 rounded-lg border border-[#eeeeee] flex gap-3 shadow-2xs">
                    <img src={c.avatar} alt={c.author} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-title-lg text-sm text-[#282526]">{c.author}</span>
                        <span className="text-[11px] font-caption text-[#73796f]">{c.time}</span>
                      </div>
                      <p className="font-body-md text-xs text-[#434840]">{c.content}</p>
                      <button
                        onClick={() => handleLike(c.id)}
                        className="flex items-center gap-1 text-[11px] font-label-md text-[#223f1e] hover:underline pt-1 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[14px]">favorite</span>
                        <span>{c.likes} Likes</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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


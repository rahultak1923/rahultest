import React from 'react';

function BlogSection() {
  // Articles catalog repository array list
  const recentArticles = [
    { title: "Meta Andromeda Update: Breaking Down the Buzz", desc: "If you're a marketer, you must have heard about the recent \"Meta Andromeda\" update. Here's what it means for your campaigns.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80" },
    { title: "Top 10 Tips to Build Your Social Media Brand in 2026", desc: "Social media is indispensable for anyone building a brand today. These core strategies will set you apart.", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=500&q=80" },
    { title: "E-commerce Marketing in 2026: Top 5 Proven Strategies", desc: "Calling all business owners — five simple, proven e-commerce strategies to grow your sales in 2026.", img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=500&q=80" },
    { title: "E-commerce Marketing in 2026: Top 5 Proven Strategies", desc: "Calling all business owners — five simple, proven e-commerce strategies to grow your sales in 2026.", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=500&q=80" }
  ]; //[cite: 2]

  return (
    <section id="blog" className="scroll-reveal">
      <div className="wrap" style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div className="eyebrow">Blog</div> 
        <h2 className="h2 text-shine" style={{ marginTop: 0 }}>Our Latest Blogs</h2>
        <div className="blog-grid">
          {recentArticles.map((blog, idx) => (
            <div className="blog-card" key={idx}>
              <div className="blog-thumb">
                <img src={blog.img} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="blog-body">
                <span>Digital Whopper</span>
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;


import React from 'react';

function TimelineJourney() {
  // Timeline structured tracking data layer arrays
  const internalMilestones = [
    { year: "2020", title: "Started our mission", desc: "We took the first step towards transforming the business landscape and opening avenues to thrive in the digital world.", align: "left" },
    { year: "2021", title: "Expansion", desc: "Starting from our founder's vision, we expanded both our professional team and the services we offer.", align: "right" },
    { year: "2022", title: "First Milestone", desc: "With 50+ businesses successfully built, our turning point arrived with Ekatra — our Shark Tank India client.", align: "left" },
    { year: "2023–24", title: "100+ Projects", desc: "Counting on projects, we built the online reputation of a century of brands this year — with many more to come.", align: "right" },
    { year: "2025", title: "Second Milestone", desc: "Recognised by the Government of Rajasthan and proudly funded for expansion. This is not the end — many more milestones await.", align: "left" }
  ]; //[cite: 2]

  return (
    <div id="journey">
      <div className="wrap" style={{ marginTop: '2rem' }}>
        <div className="eyebrow">Testimonials</div>
        <h2 className="h2 text-shine">Results our clients talk about</h2>
      </div>

      <div className="zigzag-timeline-container">
        <div className="timeline-center-line"></div>

        {/* 🦈 EXCLUSIVE SHARK TANK PREMIUM FOCUS ROW */}
        <div className="timeline-row-item row-right">
          <div className="timeline-node-dot"></div>
          <div className="timeline-badge-year">2022–2025</div>
          <div className="timeline-card-content shark-tank-card">
            <div className="tl-split-left">
              <h3>From Spark to Shark Tank India 🦈</h3>
              <p>हमने हमारे प्रीमियम क्लाइंट <b>Ekatra</b> की पूरी SEO और डिजिटल परफॉरमेंस Marketing रणनीति संभाली। उनकी ऑर्गेनिक विज़िबिलिटी को इस कदर बूस्ट किया कि उन्होंने <i>Shark Tank India</i> के मंच पर पहुँचकर शानदार फंडिंग क्रैक की।</p>
            </div>
            <div className="tl-split-right">
              <div className="tl-client-showcase">
                <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80" alt="Digital Whopper Shark Tank Client Pitch" loading="lazy" className="tl-client-img" />
                <div className="client-badge">✦ Shark Tank Funded</div>
              </div>
            </div>
          </div>
        </div>

        {/* INTERNAL HISTORY TIMELINE ITERATION MAP */}
        {internalMilestones.map((m, index) => (
          <div className={`timeline-row-item row-${m.align}`} key={index}>
            <div className="timeline-node-dot"></div>
            <div className="timeline-badge-year">{m.year}</div>
            <div className="timeline-card-content">
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineJourney;


import React, { useState } from 'react'

const PRODUCTS = [
  {
    name: "Modified Corn Starch",
    code: "E1422",
    desc: "Acetylated distarch adipate — ideal for sauces, dairy products, processed foods and bakery applications requiring heat and freeze-thaw stability.",
    origin: "Argentina / Brazil",
  },
  {
    name: "Modified Tapioca Starch",
    code: "E1422 / E1414",
    desc: "Cassava-based modified starch for clean-label applications, soups, dairy alternatives and vegan products requiring smooth texture.",
    origin: "Brazil / Paraguay",
  },
  {
    name: "Full Cream Milk Powder",
    code: "FCMP Medium Heat",
    desc: "Medium heat treatment whole milk powder for coffee creamers, recombined dairy products and food manufacturing applications.",
    origin: "Argentina / Uruguay",
  },
  {
    name: "Soybean Oil",
    code: "HS 1507.90",
    desc: "Refined soybean oil for food manufacturing, frying applications and industrial food processing.",
    origin: "Argentina / Brazil",
  },
]

const IMAGES = [
  { src: "/images/chickens.jpg",               caption: "Poultry operations, East Africa" },
  { src: "/images/dairy-visit.jpg",            caption: "Dairy supply chain visit" },
  { src: "/images/djei1726.jpg",               caption: "Agricultural field visit" },
  { src: "/images/eldoret.jpg",                caption: "Eldoret, Kenya" },
  { src: "/images/fertilizer-distribution.jpg",caption: "Fertilizer distribution, Latam" },
]

export default function App() {
  const [form, setForm]       = useState({ name: "", company: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  function set(k, v) { setForm(f => ({ ...f, [k]: v })) }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSending(true)
    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      setSubmitted(true)
    } catch(err) {
      console.error(err)
    }
    setSending(false)
  }

  return (
    <div>
      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.97)", borderBottom: "1px solid #e2e8f0", backdropFilter: "blur(8px)" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "var(--navy)", letterSpacing: "0.04em" }}>
            JMR <span style={{ color: "var(--gold)" }}>GLOBAL</span>
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 14, fontWeight: 500 }}>
            {["About","Products","Contact"].map(s => (
              <a key={s} href={"#" + s.toLowerCase()} style={{ color: "var(--text-mid)", textDecoration: "none", letterSpacing: "0.04em" }}
                onMouseEnter={e => e.target.style.color = "var(--gold)"}
                onMouseLeave={e => e.target.style.color = "var(--text-mid)"}>{s}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)", padding: "96px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "radial-gradient(circle, #c8993a 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <div style={{ display: "inline-block", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", color: "var(--gold)", background: "rgba(200,153,58,0.12)", border: "1px solid rgba(200,153,58,0.3)", padding: "4px 14px", borderRadius: 20, marginBottom: 24 }}>
            MERCOSUR TO AFRICA
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", color: "#ffffff", marginBottom: 20, maxWidth: 700, margin: "0 auto 20px" }}>
            Food Ingredient Sourcing Specialists
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.72)", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Connecting South Africa's food manufacturers with the best ingredients Mercosur has to offer.
          </p>
          <a href="#contact" style={{ display: "inline-block", background: "var(--gold)", color: "#ffffff", fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.08em", padding: "14px 32px", borderRadius: 6, textDecoration: "none", fontWeight: 500 }}>
            GET IN TOUCH
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "88px 0", background: "var(--bg-warm)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 12 }}>Who We Are</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "var(--navy)", marginBottom: 20 }}>Two regions, one Atlantic, one team</h2>
              <p style={{ color: "var(--text-mid)", marginBottom: 16, fontSize: 16, lineHeight: 1.8 }}>
                JMR Global Group was founded by a South African based in Argentina with over 10 years of experience building agribusiness trade flows between Latin America and the world.
              </p>
              <p style={{ color: "var(--text-mid)", marginBottom: 16, fontSize: 16, lineHeight: 1.8 }}>
                Mercosur is one of the world's great agricultural powerhouses. South Africa is Africa's leading food processing hub. We connect the two — bringing deep knowledge of both markets, their industries, and their people.
              </p>
              <p style={{ color: "var(--text-mid)", fontSize: 16, lineHeight: 1.8 }}>
                We source high-quality food ingredients directly from Mercosur producers and deliver them to South African food manufacturers — reliably, competitively, and with full technical support.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {IMAGES.slice(0, 4).map((img, i) => (
                <div key={i} style={{ borderRadius: 8, overflow: "hidden", aspectRatio: "4/3" }}>
                  <img src={img.src} alt={img.caption} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 64 }}>
            {[
              { value: "10+", label: "Years in agribusiness" },
              { value: "Mercosur", label: "Exclusive sourcing region" },
              { value: "South Africa", label: "Primary end market" },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center", padding: "32px 24px", background: "#ffffff", borderRadius: 8, border: "1px solid var(--border)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, color: "var(--gold)", marginBottom: 8 }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.1em", color: "var(--text-light)", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={{ padding: "88px 0", background: "var(--bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 12 }}>What We Source</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "var(--navy)" }}>Our Product Range</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {PRODUCTS.map(p => (
              <div key={p.name} style={{ padding: "32px", background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: 8, borderTop: "3px solid var(--gold)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <h3 style={{ fontSize: 18, color: "var(--navy)", fontFamily: "var(--font-display)" }}>{p.name}</h3>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--gold)", background: "rgba(200,153,58,0.1)", border: "1px solid rgba(200,153,58,0.25)", padding: "2px 8px", borderRadius: 3, whiteSpace: "nowrap", marginLeft: 12 }}>{p.code}</span>
                </div>
                <p style={{ color: "var(--text-mid)", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-light)", letterSpacing: "0.06em" }}>
                  ORIGIN: {p.origin}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "88px 0", background: "var(--bg-warm)" }}>
        <div className="container">
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 12 }}>Get In Touch</div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "var(--navy)", marginBottom: 16 }}>Start a conversation</h2>
              <p style={{ color: "var(--text-mid)", fontSize: 16 }}>Whether you are a food manufacturer looking for ingredients or a Mercosur producer looking for African distribution, we would love to hear from you.</p>
            </div>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "48px 32px", background: "#ffffff", borderRadius: 8, border: "1px solid var(--border)" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                <h3 style={{ color: "var(--navy)", marginBottom: 8 }}>Message received</h3>
                <p style={{ color: "var(--text-mid)" }}>We will be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: "#ffffff", padding: "40px", borderRadius: 8, border: "1px solid var(--border)" }}>
                {[
                  { key: "name",    label: "Your Name",    type: "text",  placeholder: "Matt Callcott-Stevens" },
                  { key: "company", label: "Company",      type: "text",  placeholder: "Your company name" },
                  { key: "email",   label: "Email Address",type: "email", placeholder: "you@company.com" },
                ].map(f => (
                  <div key={f.key} style={{ marginBottom: 20 }}>
                    <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--text-light)", textTransform: "uppercase", marginBottom: 6 }}>{f.label}</label>
                    <input type={f.type} value={form[f.key]} onChange={e => set(f.key, e.target.value)}
                      placeholder={f.placeholder} required={f.key !== "company"}
                      style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: 6, fontSize: 15, fontFamily: "var(--font-body)", color: "var(--text)", background: "var(--bg-soft)", outline: "none" }} />
                  </div>
                ))}
                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--text-light)", textTransform: "uppercase", marginBottom: 6 }}>Message</label>
                  <textarea value={form.message} onChange={e => set("message", e.target.value)}
                    placeholder="Tell us what you are looking for..." required rows={5}
                    style={{ width: "100%", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: 6, fontSize: 15, fontFamily: "var(--font-body)", color: "var(--text)", background: "var(--bg-soft)", resize: "vertical", outline: "none" }} />
                </div>
                <button type="submit" disabled={sending}
                  style={{ width: "100%", background: "var(--gold)", color: "#ffffff", border: "none", borderRadius: 6, padding: "14px", fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.08em", fontWeight: 500, cursor: "pointer", opacity: sending ? 0.7 : 1 }}>
                  {sending ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            )}

            <div style={{ textAlign: "center", marginTop: 32, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-light)" }}>
              Or email us directly at <a href="mailto:matt@jmrglobalgroup.com" style={{ color: "var(--gold)" }}>matt@jmrglobalgroup.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--navy)", padding: "32px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "#ffffff", letterSpacing: "0.04em" }}>
            JMR <span style={{ color: "var(--gold)" }}>GLOBAL</span>
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em" }}>
            INGREDIENT SOURCING · MERCOSUR TO AFRICA · © 2026
          </div>
        </div>
      </footer>
    </div>
  )
}

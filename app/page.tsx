"use client";

import { useState } from "react";

/**
 * CvKaro Fresh Homepage
 * 
 * Modules:
 * 1. Navbar - Navigation with logo and CTAs
 * 2. Hero - Main headline with animation
 * 3. Features - 3 core Phase 1 features
 * 4. Pricing - Free/Pro/Elite plans
 * 5. CTA Section - Final conversion push
 * 6. Footer - Legal links and company info
 */

// ==================== LOGO COMPONENT ====================
/**
 * Logo Component
 * Displays CvKaro brand mark - can be replaced with actual SVG/PNG logo
 * Usage: <Logo size={32} />
 */
function Logo({ size = 32 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 8,
        background: "linear-gradient(135deg, #22c55e, #16a34a)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.6,
        fontWeight: 800,
        color: "#fff",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        flexShrink: 0,
      }}
    >
      C
    </div>
  );
}

// ==================== NAVBAR ====================
/**
 * Navbar Module
 * 
 * Contains:
 * - Logo + brand name (left)
 * - Navigation links (center)
 * - Auth buttons (right)
 * 
 * Props: none
 * State: scrolled (for background change on scroll)
 */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for navbar styling
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 20), {
      passive: true,
    });
  }

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 40px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(8,12,24,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s",
      }}
    >
      {/* Logo + Brand Name */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Logo size={32} />
        <span
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#fff",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          CvKaro
        </span>
      </div>

      {/* Nav Links */}
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        {["Features", "Pricing", "How it works"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s/g, "")}`}
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Auth Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <a
          href="/login"
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.7)",
            textDecoration: "none",
            padding: "8px 16px",
          }}
        >
          Log in
        </a>
        <a
          href="/signup"
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#080c18",
            background: "#22c55e",
            borderRadius: 8,
            padding: "8px 18px",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#16a34a")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#22c55e")}
        >
          Get started
        </a>
      </div>
    </nav>
  );
}

// ==================== HERO SECTION ====================
/**
 * Hero Module
 * 
 * Contains:
 * - Main headline
 * - Subheading
 * - Primary CTA button
 * - Secondary CTA (login)
 * - Background animations (grid + glow)
 * 
 * Animations: Fade-in on scroll
 */
function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 40px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.5,
        }}
      />

      {/* Radial Glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "35%",
          width: 600,
          height: 500,
          background: "radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 900,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.25)",
            borderRadius: 100,
            padding: "6px 14px",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span style={{ fontSize: 13, color: "#22c55e", fontWeight: 500 }}>
            AI-powered CV optimization
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(42px, 5.5vw, 68px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            marginBottom: 24,
            color: "#fff",
          }}
        >
          Land your next role <span style={{ color: "#22c55e" }}>faster.</span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.55)",
            fontWeight: 300,
            maxWidth: 480,
            marginBottom: 40,
          }}
        >
          Beat ATS scores. Close skill gaps. Get matched to the right jobs. All in one place.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a
            href="/signup"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#22c55e",
              color: "#080c18",
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 28px",
              borderRadius: 10,
              textDecoration: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#16a34a";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#22c55e";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get started free
            <span style={{ fontSize: 16 }}>→</span>
          </a>
          <a
            href="/login"
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.55)",
              textDecoration: "none",
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "rgba(255,255,255,0.55)";
            }}
          >
            Log in
          </a>
        </div>

        {/* Trust text */}
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", marginTop: 20 }}>
          No credit card required · Free plan always available
        </p>
      </div>
    </section>
  );
}

// ==================== FEATURES SECTION ====================
/**
 * Features Module
 * 
 * Contains:
 * - Feature 01: Resume Builder
 * - Feature 02: ATS Scoring
 * - Feature 03: JD Gap Analysis
 * 
 * Each feature has:
 * - Step number
 * - Title
 * - Description
 * - Phase badge
 */
function FeaturesSection() {
  const features = [
    {
      step: "01",
      title: "Resume builder",
      desc: "Drag-and-drop sections, multiple templates, live PDF preview. Export to PDF or DOCX instantly.",
    },
    {
      step: "02",
      title: "ATS score analysis",
      desc: "Scan your resume against Applicant Tracking Systems. Get keyword density, header checks, and a numeric score.",
    },
    {
      step: "03",
      title: "JD gap analysis",
      desc: "Paste any job description. We extract required skills and show you exactly what's missing from your resume.",
    },
  ];

  return (
    <section id="features" style={{ padding: "120px 40px", maxWidth: 1200, margin: "0 auto" }}>
      {/* Section Header */}
      <div style={{ marginBottom: 64 }}>
        <p
          style={{
            fontSize: 13,
            color: "#22c55e",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          What CvKaro does
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            maxWidth: 480,
            color: "#fff",
          }}
        >
          Three tools that work together.
        </h2>
      </div>

      {/* Features List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {features.map((f, i) => (
          <div
            key={f.step}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              alignItems: "center",
              gap: 32,
              padding: "32px 0",
              borderTop: i === 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(34,197,94,0.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {/* Step Number */}
            <span
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.2)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
              }}
            >
              {f.step}
            </span>

            {/* Content */}
            <div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  marginBottom: 8,
                  color: "#fff",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                  maxWidth: 520,
                }}
              >
                {f.desc}
              </p>
            </div>

            {/* Phase Badge */}
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 100,
                background: "rgba(34,197,94,0.1)",
                color: "#22c55e",
                border: "1px solid rgba(34,197,94,0.2)",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              Phase 1
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ==================== PRICING SECTION ====================
/**
 * Pricing Module
 * 
 * Contains:
 * - Free plan (₹0)
 * - Pro plan (₹353 incl. GST) - Highlighted
 * - Elite plan (₹707 incl. GST)
 * 
 * Each plan shows:
 * - Price
 * - Features list
 * - CTA button
 */
function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      features: ["1 resume", "1 ATS scan / month", "Basic template"],
      cta: "Get started free",
      highlight: false,
    },
    {
      name: "Pro",
      price: "₹299",
      period: "/ month",
      tag: "Most popular",
      features: [
        "5 resumes + 10 templates",
        "Unlimited ATS scans",
        "5 JD gap analyses / month",
        "PDF & DOCX export",
      ],
      cta: "Start Pro",
      highlight: true,
    },
    {
      name: "Elite",
      price: "₹599",
      period: "/ month",
      features: [
        "Unlimited resumes & templates",
        "Unlimited JD analyses",
        "Full learning roadmap",
        "Priority support",
      ],
      cta: "Start Elite",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" style={{ padding: "120px 40px", background: "rgba(255,255,255,0.015)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: 56 }}>
          <p
            style={{
              fontSize: 13,
              color: "#22c55e",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Pricing
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#fff",
            }}
          >
            Built for India. Priced for India.
          </h2>
        </div>

        {/* Plan Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.highlight ? "rgba(34,197,94,0.06)" : "rgba(255,255,255,0.025)",
                border: `1px solid ${plan.highlight ? "rgba(34,197,94,0.35)" : "rgba(255,255,255,0.08)"}`,
                borderRadius: 16,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = plan.highlight
                  ? "rgba(34,197,94,0.5)"
                  : "rgba(255,255,255,0.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = plan.highlight
                  ? "rgba(34,197,94,0.35)"
                  : "rgba(255,255,255,0.08)")
              }
            >
              {/* Plan Tag */}
              {plan.tag && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#22c55e",
                    color: "#080c18",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 14px",
                    borderRadius: 100,
                    whiteSpace: "nowrap",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {plan.tag}
                </div>
              )}

              {/* Plan Name & Price */}
              <div style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>
                  {plan.name}
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span
                    style={{
                      fontSize: 38,
                      fontWeight: 800,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: "#fff",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div style={{ flex: 1, marginBottom: 24 }}>
                {plan.features.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 12,
                    }}
                  >
                    <span style={{ color: "#22c55e", fontSize: 14, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={`/signup?plan=${plan.name.toLowerCase()}`}
                style={{
                  display: "block",
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "12px",
                  borderRadius: 8,
                  textDecoration: "none",
                  background: plan.highlight ? "#22c55e" : "rgba(255,255,255,0.06)",
                  color: plan.highlight ? "#080c18" : "rgba(255,255,255,0.75)",
                  border: plan.highlight ? "none" : "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.2s",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CTA SECTION ====================
/**
 * Final CTA Module
 * 
 * Contains:
 * - Final headline
 * - Subtext
 * - Large green CTA button
 * 
 * Purpose: Convert hesitant visitors before they leave
 */
function CTASection() {
  return (
    <section
      style={{
        padding: "100px 40px",
        background: "rgba(34,197,94,0.04)",
        borderTop: "1px solid rgba(34,197,94,0.1)",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: 13,
          color: "#22c55e",
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 20,
        }}
      >
        Get started today
      </p>
      <h2
        style={{
          fontSize: "clamp(36px, 5vw, 60px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          marginBottom: 20,
          maxWidth: 640,
          margin: "0 auto 20px",
          color: "#fff",
        }}
      >
        Your next job starts with a better CV.
      </h2>
      <p
        style={{
          fontSize: 16,
          color: "rgba(255,255,255,0.45)",
          marginBottom: 40,
          lineHeight: 1.7,
        }}
      >
        Free to start. No credit card required.
      </p>
      <a
        href="/signup"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "#22c55e",
          color: "#080c18",
          fontWeight: 700,
          fontSize: 16,
          padding: "16px 36px",
          borderRadius: 12,
          textDecoration: "none",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#16a34a";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#22c55e";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Create your free account →
      </a>
    </section>
  );
}

// ==================== FOOTER ====================
/**
 * Footer Module
 * 
 * Contains:
 * - Logo + copyright
 * - Legal links (Privacy, Terms, Contact)
 */
function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "32px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      {/* Left: Logo + Copyright */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Logo size={24} />
        <span
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.3)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          CvKaro © 2026
        </span>
      </div>

      {/* Right: Legal Links */}
      <div style={{ display: "flex", gap: 28 }}>
        {["Privacy", "Terms", "Contact"].map((l) => (
          <a
            key={l}
            href="#"
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.25)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
          >
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}

// ==================== MAIN PAGE ====================
/**
 * CvKaro Homepage
 * 
 * Full page composition:
 * 1. Navbar (sticky)
 * 2. Hero (70vh)
 * 3. Features (6 modules)
 * 4. Pricing (3 plans)
 * 5. CTA (final push)
 * 6. Footer
 */
export default function CvKaroHomePage() {
  return (
    <div
      style={{
        background: "#080c18",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
      `}</style>

      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
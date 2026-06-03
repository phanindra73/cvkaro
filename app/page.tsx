"use client";

import { useState } from "react";

/**
 * CvKaro Coming Soon Page
 * 
 * Displays:
 * - Logo
 * - App description
 * - "Coming Soon" message
 * - Email waitlist signup (optional)
 * - Countdown timer (optional)
 */

// ==================== LOGO COMPONENT ====================
function Logo({ size = 64 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 12,
        background: "linear-gradient(135deg, #22c55e, #16a34a)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.5,
        fontWeight: 800,
        color: "#fff",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      C
    </div>
  );
}

// ==================== COMING SOON PAGE ====================
export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      // Here you'd send email to your backend/waitlist service
      console.log("Email submitted:", email);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div
      style={{
        background: "#080c18",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        .logo-float { animation: float 4s ease-in-out infinite; }
        @keyframes pulse-ring { 0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.7); } 70% { box-shadow: 0 0 0 30px rgba(34,197,94,0); } 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); } }
        .pulse { animation: pulse-ring 2s infinite; }
      `}</style>

      {/* Background Grid */}
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
        }}
      />

      {/* Radial Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          background: "radial-gradient(ellipse at center, rgba(34,197,94,0.1) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: 700,
          width: "100%",
        }}
      >
        {/* Logo */}
        <div
          className="logo-float"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 16,
          }}
        >
          <div
            className="pulse"
            style={{
              borderRadius: 12,
            }}
          >
            <Logo size={80} />
          </div>
        </div>

        {/* Brand Name */}
        <h1
          style={{
            fontSize: "clamp(28px, 6vw, 48px)",
            fontWeight: 800,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            marginBottom: 8,
            letterSpacing: "-0.02em",
          }}
        >
          CvKaro
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(14px, 3vw, 18px)",
            fontWeight: 600,
            color: "#22c55e",
            marginBottom: 24,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          CV Karo Job Pao
        </p>

        {/* Coming Soon Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(34,197,94,0.1)",
            border: "1px solid rgba(34,197,94,0.3)",
            borderRadius: 100,
            padding: "8px 16px",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
              animation: "pulse 2s infinite",
            }}
          />
          <span style={{ fontSize: 12, color: "#22c55e", fontWeight: 600 }}>
            Coming Soon
          </span>
        </div>

        {/* Main Heading */}
        <h2
          style={{
            fontSize: "clamp(24px, 5vw, 40px)",
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: 24,
            color: "#fff",
          }}
        >
          Land your next role with a smarter CV
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.5)",
            marginBottom: 40,
            maxWidth: 500,
          }}
        >
          CvKaro helps you build better resumes, beat ATS algorithms, understand skill gaps, and land jobs faster. All powered by AI.
        </p>

        {/* Features List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginBottom: 48,
            alignItems: "center",
          }}
        >
          {[
            "AI-powered resume builder",
            "ATS score analysis",
            "Job description gap analysis",
          ].map((feature) => (
            <div
              key={feature}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 14,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              <span style={{ color: "#22c55e", fontSize: 16 }}>✓</span>
              {feature}
            </div>
          ))}
        </div>



        {/* Footer Text */}
        <p
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.3)",
          }}
        >
          Launching in{" "}
          <span style={{ color: "#22c55e", fontWeight: 600 }}>Q2 2026</span>
        </p>
      </div>
    </div>
  );
}
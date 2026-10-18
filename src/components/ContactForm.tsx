"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/servicesData";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
} from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  date: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
}

interface ContactFormProps {
  variant?: "light" | "dark";
}

export function ContactForm({ variant = "light" }: ContactFormProps) {
  const isLight = variant === "light";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    vehicle: "",
    service: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = "Please provide your name";
    }

    // Validate phone number: at least 10 digits
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.service) {
      errs.service = "Please select a service of interest";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic API processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      vehicle: "",
      service: "",
      date: "",
      message: "",
    });
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <div
      className={`rounded-sm border p-6 sm:p-8 transition-all duration-300 ${
        isLight
          ? "bg-white border-slate-200 shadow-xl text-slate-900"
          : "bg-obsidian-card border-obsidian-border shadow-premium text-warm-white"
      }`}
    >
      {/* Demo Mode Notice */}
      <div
        className={`mb-6 p-3.5 rounded-sm border text-xs flex items-start gap-2.5 ${
          isLight
            ? "bg-orange-50/80 border-racing-500/30 text-slate-700"
            : "bg-obsidian-100 border-racing-500/30 text-warm-dim"
        }`}
      >
        <Sparkles className="w-4 h-4 text-racing-500 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span
            className={`font-semibold block font-mono ${
              isLight ? "text-racing-600" : "text-racing-400"
            }`}
          >
            Demo Presentation State:
          </span>
          <p className="leading-relaxed">
            This inquiry form includes full client-side validation. Once the business owner provides their preferred WhatsApp number or email, submissions will be connected directly to their notifications.
          </p>
        </div>
      </div>

      {submittedData ? (
        <div className="py-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-racing-500/10 border border-racing-500/40 text-racing-500 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3
              className={`font-heading font-bold text-2xl ${
                isLight ? "text-slate-900" : "text-warm-white"
              }`}
            >
              Enquiry Form Captured (Demo Simulation)
            </h3>
            <p
              className={`text-sm max-w-md mx-auto ${
                isLight ? "text-slate-600" : "text-warm-dim"
              }`}
            >
              Thank you,{" "}
              <strong className={isLight ? "text-slate-900" : "text-warm-white"}>
                {submittedData.name}
              </strong>
              . In production, this message alerts the workshop manager in real-time.
            </p>
          </div>

          {/* Submission summary breakdown */}
          <div
            className={`max-w-md mx-auto p-4 rounded-sm border text-left text-xs font-mono space-y-2 ${
              isLight
                ? "bg-slate-50 border-slate-200 text-slate-700"
                : "bg-obsidian-100 border-obsidian-border text-warm-dim"
            }`}
          >
            <div
              className={`flex justify-between border-b pb-1 ${
                isLight ? "border-slate-200" : "border-obsidian-border"
              }`}
            >
              <span className={isLight ? "text-slate-500" : "text-warm-dim"}>
                Service Selected:
              </span>
              <span
                className={`font-semibold ${
                  isLight ? "text-slate-900" : "text-warm-white"
                }`}
              >
                {submittedData.service}
              </span>
            </div>
            <div
              className={`flex justify-between border-b pb-1 ${
                isLight ? "border-slate-200" : "border-obsidian-border"
              }`}
            >
              <span className={isLight ? "text-slate-500" : "text-warm-dim"}>
                Contact:
              </span>
              <span className={isLight ? "text-slate-900" : "text-warm-white"}>
                {submittedData.phone}
              </span>
            </div>
            {submittedData.vehicle && (
              <div
                className={`flex justify-between border-b pb-1 ${
                  isLight ? "border-slate-200" : "border-obsidian-border"
                }`}
              >
                <span className={isLight ? "text-slate-500" : "text-warm-dim"}>
                  Vehicle:
                </span>
                <span className={isLight ? "text-slate-900" : "text-warm-white"}>
                  {submittedData.vehicle}
                </span>
              </div>
            )}
            {submittedData.message && (
              <div className="pt-1">
                <span className={isLight ? "text-slate-500 block" : "text-warm-dim block"}>
                  Notes:
                </span>
                <span
                  className={`italic ${
                    isLight ? "text-slate-800" : "text-warm-white/90"
                  }`}
                >
                  {submittedData.message}
                </span>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-heading font-bold uppercase tracking-wider text-obsidian bg-racing-500 hover:bg-racing-400 rounded-sm transition-all shadow-md"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Submit Another Demo Enquiry</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                  isLight ? "text-slate-700" : "text-warm-dim"
                }`}
              >
                Your Full Name <span className="text-racing-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                placeholder="e.g. Rahul Sharma"
                aria-invalid={Boolean(errors.name)}
                className={`w-full px-3.5 py-2.5 rounded-sm border text-sm placeholder-opacity-60 focus:outline-none focus:ring-1 ${
                  isLight
                    ? "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-racing-500 focus:ring-racing-500"
                    : "bg-obsidian-100 border-obsidian-border text-warm-white placeholder-warm-dim/50 focus:border-racing-500 focus:ring-racing-500"
                } ${errors.name ? "border-red-500 focus:ring-red-500" : ""}`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                  isLight ? "text-slate-700" : "text-warm-dim"
                }`}
              >
                Contact Number <span className="text-racing-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                placeholder="e.g. 98450 12345"
                aria-invalid={Boolean(errors.phone)}
                className={`w-full px-3.5 py-2.5 rounded-sm border text-sm placeholder-opacity-60 focus:outline-none focus:ring-1 ${
                  isLight
                    ? "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-racing-500 focus:ring-racing-500"
                    : "bg-obsidian-100 border-obsidian-border text-warm-white placeholder-warm-dim/50 focus:border-racing-500 focus:ring-racing-500"
                } ${errors.phone ? "border-red-500 focus:ring-red-500" : ""}`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          {/* Vehicle & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="vehicle"
                className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                  isLight ? "text-slate-700" : "text-warm-dim"
                }`}
              >
                Vehicle Make / Model (Optional)
              </label>
              <input
                id="vehicle"
                type="text"
                value={formData.vehicle}
                onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                placeholder="e.g. Honda City / Hyundai Creta"
                className={`w-full px-3.5 py-2.5 rounded-sm border text-sm focus:outline-none focus:ring-1 ${
                  isLight
                    ? "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-racing-500 focus:ring-racing-500"
                    : "bg-obsidian-100 border-obsidian-border text-warm-white placeholder-warm-dim/50 focus:border-racing-500 focus:ring-racing-500"
                }`}
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                  isLight ? "text-slate-700" : "text-warm-dim"
                }`}
              >
                Service Category <span className="text-racing-500">*</span>
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => {
                  setFormData({ ...formData, service: e.target.value });
                  if (errors.service) setErrors({ ...errors, service: undefined });
                }}
                aria-invalid={Boolean(errors.service)}
                className={`w-full px-3.5 py-2.5 rounded-sm border text-sm focus:outline-none focus:ring-1 ${
                  isLight
                    ? "bg-slate-50 border-slate-300 text-slate-900 focus:bg-white focus:border-racing-500 focus:ring-racing-500"
                    : "bg-obsidian-100 border-obsidian-border text-warm-white focus:border-racing-500 focus:ring-racing-500"
                } ${errors.service ? "border-red-500 focus:ring-red-500" : ""}`}
              >
                <option value="">Select Service</option>
                {servicesData.map((svc) => (
                  <option key={svc.id} value={svc.title}>
                    {svc.title}
                  </option>
                ))}
                <option value="General Consultation">General Consultation / Walk-in</option>
              </select>
              {errors.service && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.service}</span>
                </p>
              )}
            </div>
          </div>

          {/* Preferred Date */}
          <div>
            <label
              htmlFor="date"
              className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                isLight ? "text-slate-700" : "text-warm-dim"
              }`}
            >
              Preferred Visit Date (Optional)
            </label>
            <input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-sm border text-sm focus:outline-none focus:ring-1 ${
                isLight
                  ? "bg-slate-50 border-slate-300 text-slate-900 focus:bg-white focus:border-racing-500 focus:ring-racing-500"
                  : "bg-obsidian-100 border-obsidian-border text-warm-white focus:border-racing-500 focus:ring-racing-500"
              }`}
            />
          </div>

          {/* Message Notes */}
          <div>
            <label
              htmlFor="message"
              className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                isLight ? "text-slate-700" : "text-warm-dim"
              }`}
            >
              Specific Requirements or Questions
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Looking for heat-rejection sun film for side windows and custom floor mats for my car..."
              className={`w-full px-3.5 py-2.5 rounded-sm border text-sm focus:outline-none focus:ring-1 ${
                isLight
                  ? "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-racing-500 focus:ring-racing-500"
                  : "bg-obsidian-100 border-obsidian-border text-warm-white placeholder-warm-dim/50 focus:border-racing-500 focus:ring-racing-500"
              }`}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-sm bg-racing-500 hover:bg-racing-400 text-obsidian font-heading font-bold uppercase tracking-wider text-xs transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Simulating Submission...</span>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Send Enquiry (Client Demo)</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

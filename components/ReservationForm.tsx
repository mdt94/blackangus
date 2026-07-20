"use client";

import { useState, type FormEvent } from "react";
import Button from "./Button";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type ReservationFormState = {
  name: string;
  email: string;
  phone: string;
  guests: string;
  date: string;
  message: string;
};

const initialState: ReservationFormState = {
  name: "",
  email: "",
  phone: "",
  guests: "2",
  date: "",
  message: "",
};

export default function ReservationForm() {
  const { t } = useLocale();
  const f = t.contact.form;
  const [form, setForm] = useState<ReservationFormState>(initialState);

  function updateField<K extends keyof ReservationFormState>(
    field: K,
    value: ReservationFormState[K],
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void form;
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit} noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs text-foreground-muted"
          >
            {f.name} {f.required}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={f.namePlaceholder}
            className="input-luxury"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            autoComplete="name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs text-foreground-muted"
          >
            {f.email} {f.required}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={f.emailPlaceholder}
            className="input-luxury"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-xs text-foreground-muted"
          >
            {f.phone} {f.required}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder={f.phonePlaceholder}
            className="input-luxury"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            autoComplete="tel"
          />
        </div>
        <div>
          <label
            htmlFor="guests"
            className="mb-2 block text-xs text-foreground-muted"
          >
            {f.guests} {f.required}
          </label>
          <select
            id="guests"
            name="guests"
            required
            className="input-luxury cursor-pointer appearance-none"
            value={form.guests}
            onChange={(e) => updateField("guests", e.target.value)}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n} className="bg-surface">
                {n} {n === 1 ? f.guestSingular : f.guestPlural}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="date"
          className="mb-2 block text-xs text-foreground-muted"
        >
          {f.date} {f.required}
        </label>
        <input
          id="date"
          name="date"
          type="date"
          required
          className="input-luxury"
          value={form.date}
          onChange={(e) => updateField("date", e.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs text-foreground-muted"
        >
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder={f.messagePlaceholder}
          className="input-luxury resize-none"
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        {f.submit}
      </Button>
    </form>
  );
}

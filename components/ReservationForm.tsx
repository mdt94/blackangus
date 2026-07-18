"use client";

import { useState, type FormEvent } from "react";
import Button from "./Button";

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
  const [form, setForm] = useState<ReservationFormState>(initialState);

  function updateField<K extends keyof ReservationFormState>(
    field: K,
    value: ReservationFormState[K],
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Placeholder: connecter ici l'API / CMS / CRM de réservation
    // (ex. POST vers /api/reservations avec le payload `form`).
    // Pour l'instant on prépare uniquement l'état contrôlé côté client.
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
            Nom *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jean Dupont"
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
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jean.dupont@email.com"
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
            Téléphone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+33 6 00 00 00 00"
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
            Convives *
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
                {n} {n === 1 ? "personne" : "personnes"}
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
          Date *
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
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Occasion, allergies…"
          className="input-luxury resize-none"
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Envoyer
      </Button>
    </form>
  );
}

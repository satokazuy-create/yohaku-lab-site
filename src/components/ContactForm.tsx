"use client";

import { useState } from "react";
import { PrimaryButtonAction } from "@/components/Buttons";

const CONTACT_EMAIL = "yohaku.rab@gmail.com";
const CATEGORIES = ["個人相談", "法人相談", "講演依頼", "メディア・コラボ", "その他"];

const fieldClass =
  "rounded-[10px] border border-border bg-bg px-4 py-3 text-[13px] text-ink outline-none transition-colors duration-300 placeholder:text-ink-faint";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("お名前・メールアドレス・お問い合わせ内容をご入力ください。");
      return;
    }
    setError("");
    const subject = `【YOHAKU Lab お問い合わせ】${category}`;
    const body = `お名前: ${name}\nメールアドレス: ${email}\nご相談内容: ${category}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[12.5px] text-ink-faint">
          お名前
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="山田 花子"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[12.5px] text-ink-faint">
          メールアドレス
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[12.5px] text-ink-faint">ご相談内容</span>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              type="button"
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-pill border px-4 py-2 text-[12.5px] transition-colors duration-300 ${
                category === c
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-border bg-surface text-ink-soft hover:border-accent hover:text-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[12.5px] text-ink-faint">
          お問い合わせ内容
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          placeholder="お問い合わせ内容をご記入ください"
          className={`resize-none leading-[1.8] ${fieldClass}`}
        />
      </div>

      {error && <p className="text-[12.5px] text-warm-ink">{error}</p>}

      <PrimaryButtonAction type="submit" className="mt-2">
        この内容でメールを作成する
      </PrimaryButtonAction>
      <p className="text-center text-[11.5px] text-ink-faint">
        ※ボタンを押すと、入力内容を記載したメールがお使いのメールソフトで開きます。そのまま送信してください。
      </p>
    </form>
  );
}

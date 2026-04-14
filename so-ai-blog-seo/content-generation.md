---
title: Content generation
sidebar_position: 2
---

# Content generation

Understand the inputs that shape each draft before you spend credits on generation.

## What does the Article type parameter control?

Article type changes the structure, required inputs, and decision logic the model uses.

Informational is for educational search intent and broad guidance. Product is for content anchored to one or more catalog products. Comparison/Review is for side-by-side evaluation and trade-offs.

This parameter is foundational because it influences which fields matter most. For example, Product articles need at least one selected product, and Comparison/Review needs at least two selected products.

### How to choose

- Use informational for guides, tips, and explainer content.
- Use product when product specs, benefits, and links should anchor the article.
- Use comparison/review when readers need criteria, trade-offs, and a recommendation.

**Best for:** Teams planning content around search intent, product launches, or buying decisions.

**In app:** Create Post

## What should I put in the Topic field?

Topic defines the subject of the article, while keywords refine discoverability and phrasing.

Topic should describe the actual article subject in plain language. It should be understandable even if the AI never sees the rest of your keyword strategy.

A good Topic is broader than a Primary keyword. For example, the Topic might be "How to choose a travel tumbler for daily commuting", while the Primary keyword is "best commuter travel tumbler".

### Good topic habits

- Describe the article subject as a readable headline-like idea.
- Keep it aligned with one audience problem or shopping intent.
- Avoid turning Topic into a comma-separated keyword dump.

**Best for:** Merchants who want the draft to stay centered on one clear idea.

**In app:** Create Post

## What does the Feature Products parameter do?

Feature Products tells the generator which catalog items should shape facts, examples, and commerce context.

This parameter links the draft to real catalog data. In Product articles, selected products are central to the post. In Comparison/Review, they define the options being compared. In Informational articles, they can still provide concrete examples and subtle product grounding.

If the wrong products are selected, the draft may emphasize the wrong specs, claims, or buying context. Choose only products that are genuinely relevant to the story you want to tell.

### How to use selected products

- For product articles, select at least one relevant item.
- For comparison articles, select at least two items the customer would realistically compare.
- For informational articles, use products only when they add useful examples or supporting proof.

**Best for:** Merchants who want catalog-aware content instead of generic blog copy.

**In app:** Create Post

## How should I interpret the Length parameter?

Length is a soft target that influences scope and depth, not a guaranteed exact word count.

Length helps the model estimate how much detail to include. Short is best for quick answers or simple product intros. Medium suits most educational and conversion-friendly posts. Long is better when the topic needs fuller explanation, side-by-side comparison, or structured sections.

It should not override logic. If the facts are thin, forcing a long article can make the output repetitive. If the topic is complex, a product article may exceed a shorter target to preserve clarity.

### Practical guidance

- Choose short for concise posts and quick reads.
- Choose medium as the default for balanced depth.
- Choose long only when the topic and source material can support richer coverage.

**Best for:** Teams deciding how deep or concise the final draft should feel.

**In app:** Create Post

## How are Merchant notes different from the other fields?

Merchant notes are flexible instructions for brand, compliance, emphasis, and editorial guardrails.

Merchant notes are where you put constraints or preferences that do not belong cleanly in the other structured fields. They are ideal for messaging priorities, phrases to avoid, legal caution, or angle preferences.

Think of them as operator guidance for the AI. If a rule is critical and factual, Required facts may be a better home. If it is about style, framing, or emphasis, Merchant notes is usually correct.

### How to write merchant notes

- Use short, direct instructions.
- Include dos and don'ts that meaningfully affect the draft.
- Do not repeat information that already lives clearly in structured fields unless emphasis is needed.

**Best for:** Merchants adding editorial judgment and brand guardrails.

**In app:** Settings

## What should go into Proof points or USP / selling points?

Proof points are the strongest reasons the product, collection, or article angle deserves attention.

This field is for differentiators and persuasive evidence the article should lean on. Examples include material quality, durability, warranty, shipping speed, sustainability angle, or a comparison criterion that matters to buyers.

Proof points are not necessarily mandatory facts, but they should be strong enough to shape the article's emphasis and give it substance.

### How to write proof points

- List one proof point per line.
- Prioritize concrete strengths over vague marketing slogans.
- Use points that are believable, useful, and relevant to the audience.

**Best for:** Teams that want stronger persuasive structure in the draft.

**In app:** Create Post

## When should I use Required facts?

Required facts are non-negotiable details that must appear in the draft for accuracy or business reasons.

This field is for facts the article must not omit. That may include material specs, awards, policies, dimensions, manufacturing details, or compliance-safe factual statements.

Use Required facts when omission would make the article incomplete, misleading, or commercially weak. Unlike Proof points, these are not just persuasive; they are essential.

### How to write required facts

- List one fact per line.
- Keep each fact explicit and verifiable.
- Use this field for must-include information, not general writing advice.

**Best for:** Merchants who need higher factual consistency across drafts.

**In app:** Create Post

## How should I use Reference notes?

Reference notes capture extra context that helps the draft, but is not strong enough to be a required fact.

Reference notes are for soft context: seasonal timing, stock caveats, fulfillment notes, editorial nuance, or methodology notes for comparison content.

This parameter gives the AI more context without telling it that every note must appear explicitly in the final copy. It is useful when the article needs awareness of a situation, not verbatim insertion of data.

### When to use reference notes

- Add helpful background that shapes interpretation.
- Use it for nuance, caveats, or optional context.
- Move anything truly mandatory into Required facts instead.

**Best for:** Teams who want more situational awareness in the draft.

**In app:** Create Post

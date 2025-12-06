---
id: metafield-manager
title: Metafield Manager - Custom Data Management
sidebar_label: Metafield Manager
---

# Metafield Manager - Custom Data Management

Similar to Smart Tagger, but used to automatically populate **Metafields** for Products or Customers.

---

## Trigger Types

### Event-based (Real-time)
Metafields are populated instantly when:
- Product Created / Updated
- Customer Created / Updated

### Scheduled (Time-based)
Rules run on a schedule to update existing resources:
- **Hourly** – Every hour
- **Daily** – Once per day
- **Weekly** – Once per week

---

## Practical Applications

  * Automatically set washing instructions (`care.instructions`) if a product is tagged with "Silk".
  * Automatically mark a customer as "Gold" tier in a metafield if their total spend exceeds $1000.
  * Auto-populate SEO titles based on product type.
  * Set customer segment flags for loyalty programs.

---

## How to use

1.  Go to the **Metafield Manager** menu \> **Create Rule**.
2.  **Trigger Type:** Choose **Event** (real-time) or **Schedule** (time-based).
3.  Set up conditions (same fields as Smart Tagger).
4.  **Metafield Definition:**
      * **Namespace & Key:** The identifier for the metafield (e.g., `custom.material`).
      * **Value Type:** Select the data type:
        - `single_line_text_field` – Plain text
        - `number_integer` – Whole numbers
        - `number_decimal` – Decimal numbers
        - `json` – JSON objects
      * **Value:** The value to be populated.
5.  Click **Save Rule**.

---

## Available Conditions

### Products
| Field | Description |
|-------|-------------|
| Title | Product title |
| Product Type | Product type category |
| Vendor | Product vendor/brand |
| Tags | Existing product tags |
| Price | First variant's price |
| Inventory Quantity | First variant's stock level |
| Status | Product status (active, draft, archived) |
| Created At ⏰ | Product creation date (scheduled only) |
| Updated At ⏰ | Product last update date (scheduled only) |

### Customers
| Field | Description |
|-------|-------------|
| Total Spent | Lifetime spending amount |
| Orders Count | Number of orders placed |
| Account State | Customer state (enabled, disabled, invited) |
| Verified Email | Whether email is verified |
| Accepts Marketing | Marketing consent |
| Country | Customer's country code |
| Email | Customer's email address |
| Tags | Existing customer tags |
| Created At ⏰ | Account creation date (scheduled only) |
| Updated At ⏰ | Account last update date (scheduled only) |
| Last Order Date ⏰ | Date of most recent order (scheduled only) |
| Days Since Last Order ⏰ | Days since last order (scheduled only) |

> ⏰ Time-based fields are only available for Scheduled rules.

---

## Use Cases

### Automated Product Information Display

**Problem:** You sell clothing and want to display specific "Care Instructions" for each fabric type on the product page.

**Solution:**
  * **Setup:** Create a rule for **Products**.
  * **Condition:** `Tags` **contains** `Silk`.
  * **Action:**
      * Namespace & Key: `my_fields.care_guide`.
      * Value: *"Dry clean only, do not bleach, iron low heat"*.
  * **Result:** Any new product tagged "Silk" will automatically have these instructions populated.

### Customer Loyalty Tier

**Problem:** You want to automatically set a loyalty tier metafield for customers based on their spending.

**Solution (Scheduled):**
  * **Trigger Type:** Schedule (Daily)
  * **Resource:** Customers
  * **Condition:** `Total Spent` \> `1000`.
  * **Action:**
      * Namespace & Key: `loyalty.tier`.
      * Value: `Gold`.
  * **Benefit:** Use this metafield to show personalized content on your storefront.

---

## FAQs

**What's the difference between Metafield Manager and Smart Tagger?**
Smart Tagger adds/removes **tags** (simple labels). Metafield Manager sets **metafield values** (structured data with namespace, key, and typed values).

**Do I need to create metafield definitions in Shopify first?**
No, the app will create the metafield with the specified namespace and key if it doesn't exist.

**Can I use the same namespace.key for multiple rules?**
Yes, but be careful – rules are processed by priority. Higher-priority rules will set the value first.

**What happens with "Reset on Mismatch" for metafields?**
If enabled, the metafield will be **deleted** when the resource no longer meets the conditions.

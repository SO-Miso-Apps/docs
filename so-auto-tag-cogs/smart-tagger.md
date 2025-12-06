id: smart-tagger
title: Smart Tagger - Tag Automation
sidebar_label: Smart Tagger
sidebar_position: 2
---

# Smart Tagger - Tag Automation

This feature allows you to automatically tag **Orders**, **Customers**, and **Products** based on specific conditions.

---

## Trigger Types

### Event-based (Real-time)
Rules are triggered instantly when events occur:
- Order Created / Updated
- Customer Created / Updated
- Product Created / Updated

### Scheduled (Time-based)
Rules run on a schedule to process existing data:
- **Hourly** – Every hour
- **Daily** – Once per day
- **Weekly** – Once per week

💡 **Use Scheduled rules for**: Re-engagement campaigns, dormant customer tagging, inventory monitoring.

---

## How to create a new rule:

1.  Go to the **Smart Tags** menu \> Click **Create Rule**.
2.  **Trigger Type:** Choose **Event** (real-time) or **Schedule** (time-based).
3.  **AI Magic Generator:** Type a description in English (e.g., *"Tag orders over $500 as VIP"*), and the AI will auto-fill the configuration.
4.  **Manual Setup:**
      * **Rule Name:** Enter a memorable name.
      * **Resource:** Choose **Orders**, **Customers**, or **Products**.
      * **Conditions:** Select a data field and a comparison operator.
          * *Logic:* Select "All rules pass" (AND) or "Any rule passes" (OR).
      * **Tags:** Enter the tags to be applied (e.g., `VIP`, `High-Value`).
5.  **Advanced Settings:**
      * *Reset on Mismatch:* If enabled, the system will **REMOVE** the tag if the resource no longer meets the conditions.
6.  Click **Save**.

---

## Available Conditions by Resource

### Orders

| Field | Description |
|-------|-------------|
| Total Price | Order total amount |
| Subtotal Price | Order subtotal (before shipping/tax) |
| Gateway / Payment Method | Payment gateway used (PayPal, Shopify Payments, etc.) |
| Financial Status | Payment status (paid, pending, refunded) |
| Currency | Order currency code (USD, EUR, etc.) |
| Total Weight | Combined weight of all items |
| Shipping Method | Selected shipping service name |
| Shipping City | Customer's shipping city |
| Shipping Country | Country code (US, CA, VN, etc.) |
| Shipping Province/State | State/province code |
| Shipping Zip | Postal/ZIP code |
| Source Name | Order source (web, pos, mobile, etc.) |
| Discount Code | Applied discount code |
| Landing Site | First page visited before checkout |
| Referring Site | External referrer URL |
| Line Item SKU | SKU of any line item |
| Line Item Vendor | Vendor of any line item |
| Line Item Name | Product name of any line item |
| Line Item Quantity | Quantity of any line item |
| Customer Order Count | Customer's total order count |
| Email | Customer's email address |
| Tags | Existing tags on the order |
| Created At ⏰ | Order creation date (scheduled only) |
| Updated At ⏰ | Order last update date (scheduled only) |

### Customers

| Field | Description |
|-------|-------------|
| Total Spent | Lifetime spending amount |
| Orders Count | Number of orders placed |
| Account State | Customer state (enabled, disabled, invited) |
| Verified Email | Whether email is verified (true/false) |
| Accepts Marketing | Marketing consent (true/false) |
| Country | Customer's country code |
| State/Province | Customer's state/province |
| Email | Customer's email address |
| Tags | Existing tags on the customer |
| Created At ⏰ | Account creation date (scheduled only) |
| Updated At ⏰ | Account last update date (scheduled only) |
| Last Order Date ⏰ | Date of most recent order (scheduled only) |
| Days Since Last Order ⏰ | Days elapsed since last order (scheduled only) |

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

> ⏰ Fields marked with clock icon are **only available for Scheduled rules**.

---

## Time-based Operators (Scheduled Rules Only)

| Operator | Example | Description |
|----------|---------|-------------|
| `older_than_days` | 30 | Resource was created/updated more than X days ago |
| `newer_than_days` | 7 | Resource was created/updated within the last X days |
| `in_last_x_days` | 14 | Date field falls within the last X days |

---

## Rule Library & Templates

The **Library** tab provides pre-built templates for common use cases:

### How to use templates:
1. Click the **Library** tab on the Smart Tagger page.
2. Browse available templates by category.
3. Click **Import** on the template you want.
4. Review and customize the imported rule.
5. Click **Save** to activate.

### Popular templates include:
- VIP Customer Tagging
- High-Risk Order Alerts
- Low Stock Warnings
- International Shipping Labels
- Seasonal Sale Tags
- Dormant Customer Re-engagement

💡 **Tip:** After importing a template, you can modify the conditions and tags to match your specific needs.

---

## Export & Import Rules

### Export Rules
1. Click the **Export** button on the Smart Tagger page.
2. A JSON file containing all your rules will be downloaded.
3. Use this for backup or to transfer rules between stores.

### Import Rules
1. Click the **Import** button.
2. Select a JSON file containing rules.
3. Imported rules are **disabled by default** – review and enable them manually.

---

## Use Cases

### Customer Segmentation & Engagement

**Problem:** You want to identify high-spending customers to send special discount codes or provide VIP care.

**Solution (Event-based):**
  * **Setup:** Create a rule for **Customers**.
  * **Condition:** `Total Spent` \> `500`.
  * **Action:** Apply tags `VIP` and `Gold-Member`.

### Re-engage Dormant Customers

**Problem:** Customers who haven't ordered in 90 days should receive a win-back campaign.

**Solution (Scheduled):**
  * **Trigger Type:** Schedule (Daily)
  * **Resource:** Customers
  * **Condition:** `Days Since Last Order` \> `90`.
  * **Action:** Apply tag `Dormant-90Days`.
  * **Benefit:** Use this tag to trigger email flows in Klaviyo/Mailchimp.

### High-Risk & International Order Alerts

**Problem:** International orders require different packing procedures.

**Solution:**
  * **Condition:** `Shipping Country Code` **is not** `US`.
  * **Action:** Apply tag `International-Shipping`.

### Tag Orders by Marketing Channel

**Problem:** You want to track which sales come from ads vs organic.

**Solution:**
  * **Condition 1:** `Referring Site` **contains** `facebook.com` → Tag: `FB-Ads`
  * **Condition 2:** `Discount Code` **equals** `SUMMER10` → Tag: `Summer-Campaign`

### Low Stock Alerts

**Problem:** Automatically identify products running low on inventory.

**Solution:**
  * **Resource:** Products
  * **Condition:** `Inventory Quantity` \< `10`.
  * **Action:** Apply tag `Low-Stock`.

---

## FAQs

**Why didn't my Smart Tag rule apply to an old order?**
Event-based rules only trigger on new events (Order Created/Updated). To tag old orders, either use **Scheduled rules** or the **Bulk Operations** tool.

**What does "Reset on Mismatch" mean?**
If enabled, the system will actively **remove** the tag when the resource no longer meets the conditions (e.g., if an order is refunded and drops below the VIP threshold).

**How does the "AI Magic Generator" work?**
The AI uses Google Gemini to translate your natural language description into a structured rule configuration. Always review before saving.

**How quickly are rules applied after an order is placed?**
Event-based rules are processed within seconds via webhooks. Check the **Activity Log** for exact timing.

**When do Scheduled rules run?**
Scheduled rules run based on the interval you set (hourly/daily/weekly). The next run time is shown in the rule details.

**Can I have multiple rules that add the same tag?**
Yes, but be aware of rule priority. Higher-priority rules are processed first, and their decisions cannot be overridden by lower-priority rules.

**What's the difference between "All rules pass" and "Any rule passes"?**
- **All rules pass (AND):** ALL conditions must be true.
- **Any rule passes (OR):** At least ONE condition must be true.

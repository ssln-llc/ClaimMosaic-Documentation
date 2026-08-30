---
title: "Document Templates"
description: "Create, manage, and preview custom document templates to automate document generation for claims."
sidebar:
  order: 3
---

:::note[Feature Availability]
Document Templates are available on the **Professional** and **Enterprise** tiers.
:::

The **Document Templates** section lets you build reusable documents such as a Letter of Representation (LOR). A template can combine formatted text, Word documents, and PDF sections. Tokens merge data from the selected Claim Mosaic record into the generated document.

### Creating a Template

1. Click **Create Document**.
2. Enter a required **Template Name** and choose a **Category**.
3. Select the **Document Type** that supplies the template's data.
4. Choose whether the template is active, generates as a PDF, or requires signatures.
5. Click **Save Changes**.
6. Click **Add Section** and choose the content needed in the template:
   - **Text Section** for formatted text and record tokens
   - **Word Document Section** for an existing Word document
   - **PDF Section** for an existing PDF; this option is limited to Owner and Admin users
7. Add and reorder sections until the document is in the required sequence.

After the first save, use **View all available tokens** to find placeholders for record data. Add the tokens to text or Word content where the generated value should appear.

### Managing and Previewing Templates

Templates appear in a searchable table with their title, category, created date, and actions. You can:

- **Filter and search:** Narrow the table to the template you need.
- **Edit:** Open a template to change its details, sections, tokens, and section order.
- **Preview:** Use **Preview** in the template builder to inspect the generated layout.
- **Delete:** Use the delete action to remove a template you no longer need.

When generating a document from a record's Files tab, Claim Mosaic merges that record's current data into the selected template.

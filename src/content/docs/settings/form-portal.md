---
title: "Form Portal"
description: "Configure a public intake form and receive submissions as leads."
sidebar:
  order: 8
---

:::caution[Release review]
This guide accompanies the proposed Form Portal release. Availability and final release approval are pending.
:::

The **Form Portal** collects new lead information through a public link or an embedded form on your website. It is separate from the [External Portal](/settings/external-portals/), which shares information from an existing claim.

## Permissions

Open **Settings → External Portal → Form Portal**. Your role needs permission to view External Portal settings. Changing the form requires permission to update those settings. Viewing the configuration does not grant permission to change it.

People submitting the public form do not need a Claim Mosaic account. Treat the form link as public: anyone with it can submit information. It does not give visitors access to your existing leads or claims.

## Configure the form

Choose whether to show your company logo, address, phone number, and email. Add a **Header Message** to explain what visitors should provide. Display settings save automatically. The save status shows pending, saving, saved, or an error. Use **Retry** after a failed save. Leaving with pending display, field, or Goals & Tasks changes prompts you to confirm. Wait for the save to finish to preserve your changes.

Move lead fields between **Included fields** and **Excluded fields**. Included fields appear on the public form; hidden fields do not. The contact fields First Name, Last Name, Email, and Phone Number cannot be excluded through the editor. Required fields must be completed before submission.

Supported public controls include text, long text, dates, custom numbers, custom selection lists, custom checkboxes, and address inputs. Custom text is limited to 500 characters. Custom numbers support up to 10 digits before the decimal point and four after it. Address information can be entered manually. Unsupported field types should not be included.

Use **Move up** and **Move down** to change the order, or drag fields. **Include** and **Exclude** buttons provide the same selection controls without dragging. Saved order is preserved after reloading. If a field save fails, the editor restores the previous selection and shows an error.

## Assign staff and follow-up work

Use **Staff Assignments** to add the contacts who should receive access to leads created by the form. Select staff to remove them, then confirm the removal. Only contacts belonging to your account can be assigned.

Configure follow-up **Goals & Tasks** in the work-plan editor. Use **Save Goals & Tasks** to save that section. It has an explicit save action, separate from the display settings. New submissions create the configured work after assigning lead staff. Changes affect future submissions.

## Share or embed

**Copy Form Link** copies the public form address. Open it in a separate browser window to review the current form.

**Display Embed Code** provides an iframe snippet. Copy it into an HTML/embed block on your website. The iframe uses the public form link; do not include your account password or access tokens.

Test the published website, including a narrow phone layout. Your website builder may restrict iframe content. If an embed is blocked, provide the public form link instead. Embedded submissions do not require third-party cookies. A form left open for more than two hours must be reloaded before submitting.

## Document uploads

Enable **Allow Document Uploads** to display the file picker and drag-and-drop area. Visitors can review selected files, remove individual files, or clear the selection before submitting.

Uploads are limited to 20 files, 50 MB per file, and 200 MB total. Empty files, duplicate filenames, directory paths, and generic or missing file media types are rejected. Supported extensions include PDF, DOC/DOCX, XLS/XLSX, JPG/JPEG, PNG, GIF, TXT, ZIP, and RAR. The browser rejects an entire selected batch if it exceeds a size or count limit. Browser and hosting limits can impose lower limits. Disabling uploads also prevents direct upload submissions to that form.

Uploaded files are associated with the new lead in its **External Portal** file folder. Acceptance of an extension is not a malware-scan guarantee; handle unsolicited files cautiously.

## Receive submissions

A successful submission creates a lead in the account that owns the form, using its new-lead status. The form then displays **Thank you!** and a **Submit New** link.

The form validates required fields, dates, numbers, selection options, field lengths, and uploads. Invalid submissions display an error. A visitor should correct the error and submit again. If the form configuration changed while it was open, reload the form.

The form does not promise an email receipt to the visitor. Staff follow-up depends on the saved work plan and your normal notification settings.

## Known limits

- This is lead intake, not a claim update or claim-creation form.
- Retrying the same open form after an interrupted response returns the completed result without creating another lead. Reloading the page or choosing **Submit New** starts a new submission.
- There is no public draft-resume workflow. Reloading can discard entered information.
- Public intake is rate limited. If a limit is reached, wait before trying again.
- Final release verification of authenticated configuration and real downstream notification delivery is still pending. Do not use this review guide as production release approval.

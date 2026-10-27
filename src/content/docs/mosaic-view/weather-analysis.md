---
title: "Weather Analysis"
description: "Analyze historical hail, wind, and tornado activity for a property, export a weather verification PDF, and create a lead from a selected event."
sidebar:
  order: 6
---

The **Weather Analysis** view helps you check historical weather activity for a property and identify events that may support a damage discussion. Add it as a **Weather Analysis** widget on the dashboard.

## Open Weather Analysis

1. Open **Dashboard → Overview → Edit layout**.
2. Select **Add widget → Weather Analysis**, then **Save layout**.
3. In Standard mode, use the widget directly. In Thumbnails mode, click its card to open the tool in a modal.
4. Enter a full property address, then click **Analyze**.

As you type, Claim Mosaic can suggest matching **Claims**, **Leads**, and **Places**. Selecting a suggestion starts the analysis for that address.

### Modal and full-page views

Closing and reopening the thumbnail modal keeps the current search and results during your dashboard session. The thumbnail shows the last search's candidate count and address when results are available. Adding the widget does not start an analysis automatically.

Select **Full screen** to open the standalone tool, then **Dashboard** to return. Full screen starts a separate session and does not transfer the widget's search results. Older Weather Analysis bookmarks remain available.

## Review the Results

After the search completes, the event list shows the matching weather events for the property. You can sort the list by:

- **Best match**
- **Date**
- **Distance**
- **Severity**

Select any event to open the detailed report. On wide screens it appears beside the event list; on narrow screens, scroll below the list. The detailed report includes:

- Key weather metrics such as wind gusts, hail size, precipitation, and temperature
- Distance from the property
- Confidence score and impact severity
- Potential damage mechanisms
- Evidence matrix findings
- Data quality or limitation notes when the source data is incomplete

The default best-match event is highlighted automatically after analysis completes.

## Mosaic AI Recommendation

For **Enterprise** accounts, Claim Mosaic can also generate a **Mosaic AI** recommendation after the analysis finishes. This recommendation explains which single event is the strongest candidate for claim support discussion.

## Download the Weather Report PDF

Click **Download PDF** from the selected event to generate a weather verification report. Before the PDF is created, you can choose whether to include:

- Evidence matrix
- Data quality and limitations
- Appendix with raw metrics
- Mosaic AI recommendation for Enterprise accounts

## Create a Lead from Weather Analysis

Click **Create Lead** to open the lead form with the selected property address and event date already filled in.

When you save the lead:

- The selected weather event date is used as the **Date of Loss**
- The generated weather verification PDF is attached to the new lead automatically

This is useful when you want to move directly from weather research into lead intake without recreating the report by hand.

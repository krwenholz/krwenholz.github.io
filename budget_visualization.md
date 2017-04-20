---
layout: app
title: Budget Visualization Tool
tagline:
---

It's a work in progress....

*    TODO: nicer font sizes in tool
*    TODO: colored buttons and make them part of text (+ -)
*    TODO: pop out the graph on click so it takes up more space and can be read more easily (larger)

Use the tool below to understand how your buckets of wealth change over time.
You can set up multiple accounts and add "Income Events". An income event is
anything that happens monthly to your account. You can name these and specify
how the event changes your account:

*    Flat change: a positive or negative amount like your paycheck
*    Percent yearly change: a positive or negative percentage like interest
     in your bank account or depreciation

<hr />

{% include budget-visualization-chart.html %}

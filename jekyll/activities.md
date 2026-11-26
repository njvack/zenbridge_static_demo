---
layout: default
title: Activities
permalink: /activities1.html
---

<figure class="float-right">
  <img src="assets/images/enso-practice-period.jpg" width="260" height="384"
       alt="Six members of the sangha standing behind rows of brush-painted enso circles laid out on the floor">
  <figcaption>Practicing with the enso, from the 2026 Spring Practice Period.</figcaption>
</figure>

## Upcoming events

<!-- The events are listed in _data/events.yml. -->
<ul class="event-list">
  {% for event in site.data.events %}
  <li>
    <h3>{{ event.title }}</h3>
    <p class="event-list__when">{{ event.when }}</p>
    {% if event.details %}{{ event.details | markdownify }}{% endif %}
  </li>
  {% endfor %}
</ul>

For our weekly meditation schedule, see the [home page](./).

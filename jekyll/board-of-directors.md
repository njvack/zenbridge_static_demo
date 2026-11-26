---
layout: default
title: Board of Directors
permalink: /board-of-directors.html
---

<!-- The list of board members is in _data/board.yml. -->
<ul class="people">
  {% for person in site.data.board %}
  <li>
    <span class="people__name">{{ person.name }}</span>
    <span class="people__role">{{ person.role }}</span>
  </li>
  {% endfor %}
</ul>

---
  layout: simple-page
  title: Sponsors of JSConf EU 2015
  title-short: Sponsors
---

{% assign sponsors=site.tags.sponsor %}
{% assign overview=true %}

{% for post in sponsors %}
  {% if.post.level == "sponsor-special" %}
  <div class="sponsor">
    {{ post.content }}
  </div>
  {% endif %}
{% endfor %}

{% for post in sponsors %}
  {% if.post.level == "sponsor-main" %}
  <div class="sponsor">
    {{ post.content }}
  </div>
  {% endif %}
{% endfor %}

{% for post in sponsors %}
  {% if.post.level == "sponsor-support" %}
  <div class="sponsor">
    {{ post.content }}
  </div>
  {% endif %}
{% endfor %}

{% for post in sponsors %}
  {% if.post.level == "sponsor-custom" %}
  <div class="sponsor">
    {{ post.content }}
  </div>
  {% endif %}
{% endfor %}


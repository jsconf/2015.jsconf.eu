---
  layout: simple-page
  title: Sponsorship for JSConf EU 2015
  title-short: Sponsorship
  pattern: bg-pink-white
---

{% assign sponsors=site.tags.sponsor %}
{% assign overview=true %}

<p>
  We are currently offering sponsorship packages and media partnerships for JSConf EU 2015. <a href="mailto:contact@jsconf.eu">Contact us for details</a>.
</p>

<p>
  These companies have supported us in 2014:
</p>

{% for post in sponsors %}
  {% if.post.level == "sponsor-special" %}
  <div class="sponsor">
    <img src="{{ site.baseurl }}{{post.image}}" class="img-flex" />
    <h4>
      <a href="{{ site.baseurl }}{{post.permalink}}">{{ post.title }}</a>
    </h4>
    <!-- {{ post.content }} -->
  </div>
  {% endif %}
{% endfor %}

{% for post in sponsors %}
  {% if.post.level == "sponsor-main" %}
  <div class="sponsor">
    <img src="{{ site.baseurl }}{{post.image}}" class="img-flex" />
    <h4>
      <a href="{{ site.baseurl }}{{post.permalink}}">{{ post.title }}</a>
    </h4>
    <!-- {{ post.content }} -->
  </div>
  {% endif %}
{% endfor %}

{% for post in sponsors %}
  {% if.post.level == "sponsor-support" %}
  <div class="sponsor">
    <img src="{{ site.baseurl }}{{post.image}}" class="img-flex" />
    <h4>
      <a href="{{ site.baseurl }}{{post.permalink}}">{{ post.title }}</a>
    </h4>
    <!-- {{ post.content }} -->
  </div>
  {% endif %}
{% endfor %}

{% for post in sponsors %}
  {% if.post.level == "sponsor-custom" %}
  <div class="sponsor">
    <img src="{{ site.baseurl }}{{post.image}}" class="img-flex" />
    <h4>
      <a href="{{ site.baseurl }}{{post.permalink}}">{{ post.title }}</a>
    </h4>
    <!-- {{ post.content }} -->
  </div>
  {% endif %}
{% endfor %}


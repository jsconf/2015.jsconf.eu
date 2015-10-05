---
  layout: sub-page
  title: JavaScript conference talk videos of JSConf EU 2015
  title-short: Videos
  tags: foo
  permalink: "/videos/"
---

{% assign speakers=site.tags.speaker | reverse %}
{% assign overview=true %}

<a style="display:none" href="https://maps.google.com" target="_blank"><img id="speakers_map" src="{{ site.speaker_index_base_url | uri_escape }}0xE10079%7Csize:tiny{% for post in speakers %}%7C{% if post.from != "" %}{{ post.from | cgi_escape }}{% endif %}{% endfor %}" /></a>

<h1>Videos</h1>

<p>
  Subscribe to our <a href="https://www.youtube.com/user/jsconfeu" target="_blank">YouTube channel.</a>
</p>

{% for post in speakers %}
{% if post.video %}
  <article id="{{ post.id }}" class="speaker_list">
    {% assign page = post %}
    {% include speaker.md %}
  </article>
{% endif %}
{% endfor %}

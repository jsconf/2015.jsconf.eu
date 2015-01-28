---
  layout: sub-page
  title: Speakers of JSConf EU 2015
  title-short: Speakers
  tags: foo
---

{% assign speakers=site.tags.speaker %}
{% assign overview=true %}


<!-- <section class="bg-pink-white-off bg-no-border">

  <div class="item-100">
    {% include facepile.md %}
  </div>

  <div class="item-100">
    <a style="display:none" href="https://maps.google.com" target="_blank"><img id="speakers_map" src="{{ site.speaker_index_base_url | uri_escape }}0xE10079%7Csize:tiny{% for post in speakers %}%7C{% if post.from != "" %}{{ post.from | cgi_escape }}{% endif %}{% endfor %}" /></a>
  </div>
  
</section> -->

<section class="bg-pink-white-off bg-no-border">

    {% assign speaker_list = speakers | reverse %}
    {% for post in speaker_list %}
      <article id="{{ post.id }}" class="wrapper wrapper-post">
        {% assign page = post %}
        {% include speaker.md %}
      </article>
    {% endfor %}

</section>


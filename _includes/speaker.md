{% assign image_link="" %}
{% if page.website != "" %}
  {% assign image_link=page.website %}
  {% assign website=page.website %}
{% elsif page.twitter != ""  %}
  {% assign website=page.twitter %}
{% elsif page.gplus != ""  %}
  {% assign website=page.gplus %}
{% elsif page.github != ""  %}
  {% assign website=page.github %}
{% endif %}
{% if overview %}
  {% assign image_link=page.url %}
{% endif %}

{% include speaker_map.md %}

<div class="item-50 item-deco">
  {% unless overview %}

  <figure>
    {% if page.image %}
    {% if image_link %}<a href="{{ image_link }}" class="speaker_avatar" target="_blank">{% else %}<span class="speaker_avatar">{% endif %}
      <img src="{{ page.image.filename }}" alt="{{ page.speaker }}" width="200" height="{{ page.image.heightSite }}" itemprop="image" class="speaker" />
    {% if image_link %}</a>{% else %}</span>{% endif %}
    {% endif %}
  </figure>

  {% endunless %}
</div>

<div class="item-50 item-content">
  {% if overview %}
  <div>
  {% else %}
    {% if page.video %}
    <div itemprop="video" class="talk_video" itemscope="" itemtype="http://schema.org/VideoObject">
    {% else %}
    <div itemscope="" itemtype="http://schema.org/Person">
    {% endif %}
  {% endif %}

    <header class="scrollTarget speaker-header">
      <h2>
        {{post.overview}}
        <a href="{{ page.url }}">
          <span itemprop="name">
            {{ page.speaker }}: <br class="hide-mobile">
            {{ page.talk }}
          </span>
        </a>
      </h2>
      <div class="speaker-aside">
      {% if overview %}
        {% if page.image %}
          <img src="{{ page.image.filename }}" alt="{{ page.speaker }}" width="200" height="{{ page.image.heightSite }}" itemprop="image" class="speaker" />
        {% endif %}
      {% endif %}
      <ul class="speaker-info">
        {% if page.from != "" %}<li>
          <a href="https://www.google.com/maps/preview#!q={{ page.from }}"  target="_blank">{{ page.from != ""  }}</a>
        </li>{% endif %}
        {% if page.website != ""  %}<li><a href="{{ page.website }}" itemprop="url" target="_blank">Website</a></li>{% endif %}
        {% if page.github != ""  %}<li><a href="{{ page.github }}" itemprop="url" target="_blank">Github</a></li>{% endif %}
        {% if page.twitter != ""  %}<li><a href="{{ page.twitter }}" itemprop="url" target="_blank">Twitter</a></li>{% endif %}
        {% if page.gplus != ""  %}<li><a href="{{ page.gplus }}" itemprop="url" target="_blank">Google+</a></li>{% endif %}
        {% if page.github2 %}<li><a href="{{ page.github2 }}" itemprop="url" target="_blank">Github</a></li>{% endif %}
        {% if page.twitter2 %}<li><a href="{{ page.twitter2 }}" itemprop="url" target="_blank">Twitter</a></li>{% endif %}
      </ul>
      </div>
    </header>

    <div class="description">
      <div itemprop="description">
        
        {{ page.description | markdownify }}
        

        {% if page.video %}

          {% if overview %}
            <div class="video-preview">
              <a href="{{ page.url }}">
                <img height="90"
                  src="http://img.youtube.com/vi/{{ page.video }}/maxresdefault.jpg"
                  alt="Watch the Video"
                  title="Watch the Video" />
                  <span class="video-preview-icon">
                    <svg><use xlink:href="#svg-jsconfeu-youtube" /></svg>
                  </span>
              </a>
            </div>
          {% else %}
            <div class="video">

              {% assign video_id=page.video %}

              {% include youtube.md %}

              <div class="video_info">
                {% if page.slides %}
                  <a href="{{ page.slides }}" target="_blank" class="slides">
                    &raquo; {% if page.slides_text %}{{ page.slides_text }}{% else %}Slides{% endif %}
                  </a>
                  {% if page.slides2 %}
                  | <a href="{{ page.slides2 }}" target="_blank" class="slides">
                    &raquo; {% if page.slides_text2 %}{{ page.slides_text2 }}{% else %}Slides{% endif %}
                  </a>
                  {% endif %}
                {% else %}
                  <span>Ping us if you have a link to the slides.</span>
                {% endif %}
                {% if page.transcript %}
                  <a href="#transcript">&raquo; Jump to Transcript</a>
                {% endif %}
              </div>
            </div>

          {% endif %}
        {% endif %}
      </div>

    </div>

  {% unless overview %}
    {% if page.transcript %}
      <h4 id="transcript">Transcript</h4>
      <div class="transcript">
      {% include {{page.transcript}} %}
      <br>
      Edit transcript via <a href="https://github.com/jsconf/2014.jsconf.eu/blob/gh-pages/_includes/{{page.transcript}}" rel="nofollow">pull request.</a>
      </div>

    {% endif %}
  {% endunless %}
  </div>

</div>


# Blog images

Store blog thumbnails and post images in this folder.

Set a post card thumbnail in the post's front matter:

```yaml
thumbnail: "/assets/images/blog_images/example-thumbnail.jpg"
thumbnail_alt: "A short description of the image"
```

## Add an image inside a post

Place this line between paragraphs wherever the image should appear:

```liquid
{% include blog-image.html image="example-image.jpg" caption="A short description of the image." %}
```

The helper automatically looks for the file in `assets/images/blog_images/`. The caption is also used as the image description unless a separate one is supplied:

```liquid
{% include blog-image.html image="example-image.jpg" caption="Food forest after the spring workday." alt="Volunteers standing beside newly mulched fruit trees." %}
```

Standard Markdown images also work:

```markdown
![A short description](/assets/images/blog_images/example-image.jpg)
```

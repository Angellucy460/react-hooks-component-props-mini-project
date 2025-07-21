import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let readTime = "";

  if (minutes < 30) {
    readTime = "☕️".repeat(Math.ceil(minutes / 5));
  } else {
    readTime = "🍱".repeat(Math.ceil(minutes / 10));
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{readTime} {minutes} min read • {date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
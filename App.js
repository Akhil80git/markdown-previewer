import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Previewer!
## Try editing this text
[Learn Markdown](https://www.markdownguide.org)

\`inline code\`

\`\`\`javascript
// code block
function hello() {
  return 'world';
}
\`\`\`

- List item 1
- List item 2

> Blockquote

**Bold text** and _italic text_

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <div className="editor-container">
        <h2>Editor</h2>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
        />
      </div>
      <div className="preview-container">
        <h2>Preview</h2>
        <div
          id="preview" 
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

export default App;

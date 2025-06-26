.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

#editor, #preview {
  width: 80%;
  min-height: 300px;
  margin: 10px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

#editor {
  font-family: monospace;
  background-color: #fafafa;
}

#preview {
  background-color: white;
}

/* Markdown styling */
#preview h1 {
  border-bottom: 2px solid #224b4b;
  padding-bottom: 10px;
}

#preview h2 {
  border-bottom: 1px solid #224b4b;
  padding-bottom: 5px;
}

#preview code {
  background: #f0f0f0;
  padding: 2px 5px;
  border-radius: 3px;
}

#preview pre {
  background: #f8f8f8;
  padding: 10px;
  border-radius: 3px;
  overflow-x: auto;
}

#preview blockquote {
  border-left: 3px solid #224b4b;
  color: #224b4b;
  padding-left: 10px;
  margin-left: 0;
}

#preview table {
  border-collapse: collapse;
  margin: 15px 0;
}

#preview th, #preview td {
  border: 1px solid #ddd;
  padding: 8px;
}

#preview img {
  max-width: 100%;
}

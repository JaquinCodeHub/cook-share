"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

export default function EditorClient() {
  const editorRef = useRef<any>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);

  useEffect(() => {
    let EditorJS: any;

    const initEditor = async () => {
      const Editor = (await import("@editorjs/editorjs")).default;

      // Importar herramientas dinámicamente
      const Header = (await import("@editorjs/header")).default;
      const List = (await import("@editorjs/list")).default;

      if (!editorRef.current) {
        const editor = new Editor({
          holder: "editorjs",
          placeholder: "Escribe algo...",
          tools: {
            header: Header,
            list: List,
          },
        });

        editorRef.current = editor;
        setIsEditorReady(true);
      }
    };

    if (typeof window !== "undefined") {
      initEditor();
    }

    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div className="border p-4 rounded bg-white">
      {/* Este div es donde se monta Editor.js */}
      <div id="editorjs" />
      <Button
        onClick={async () => {
          if (editorRef.current) {
            const data = await editorRef.current.save();
            console.log("Contenido del editor:", data);
          }
        }}
      >
        Guardar
      </Button>
    </div>
  );
}

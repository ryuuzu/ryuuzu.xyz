import type { PartialBlock } from '@blocknote/core';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/shadcn';
import '@blocknote/shadcn/style.css';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

import '@/assets/css/write.css';

export const Route = createFileRoute('/_authenticated/blogs/write')({
  component: RouteComponent,
});

function RouteComponent() {
  const [postData, setPostData] = useState<{
    editorDocument: Array<PartialBlock>;
    markdownContent: string;
  }>({
    editorDocument: [
      {
        type: 'paragraph',
        content: [
          'Hello, ',
          {
            type: 'text',
            text: 'world!',
            styles: {
              bold: true,
            },
          },
        ],
      },
    ],
    markdownContent: '',
  });
  const [postContent, setPostContent] = useState('');
  const editor = useCreateBlockNote({
    initialContent: postData.editorDocument,
  });

  const onChange = async () => {
    // Converts the editor's contents from Block objects to Markdown and store to state.
    const markdown = await editor.blocksToMarkdownLossy(editor.document);

    setPostData({
      editorDocument: editor.document,
      markdownContent: markdown,
    });
  };

  useEffect(() => {
    onChange();
  }, []);

  return (
    <main
      className={'bg-primary h-dvh w-full space-y-5 px-20 py-10 text-white'}
    >
      <h1 className={'text-3xl font-semibold'}>Write a New Blog Post</h1>
      <div></div>
      <div className={'min-h-[50dvh] rounded-lg bg-[#1f1f1f]'}>
        <BlockNoteView editor={editor} />
      </div>
    </main>
  );
}

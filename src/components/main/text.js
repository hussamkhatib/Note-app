import React,{useMemo,useState} from 'react'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'


const Text = () => {
    const [value, setValue] = useState(initialValue)
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])

    return (
        <div className='textWrapper'>
        <Slate
        className= 'textWrapper' 
        editor={editor} value={value} onChange={value => setValue(value)}>
            <Editable />
        </Slate>
        </div>
             )
}

export default Text

const initialValue = [
    { 
      type: 'paragraph',
      children: [
        { text: 'This is editable plain text, just like a <textarea>!' },
      ],
    }
  ];
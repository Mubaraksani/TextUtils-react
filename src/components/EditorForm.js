import React, { useState } from 'react'

export default function EditorForm(props) {
   const [text, setText] = useState('');
   let { words, chars } = countWordsAndChars(text);

   const handleUpClick = () => {
      setText(text.toUpperCase());
      props.alert('Converted to uppercase','success')
   }

   const handleCounter = (e) => {
      setText(e.target.value);
      countWordsAndChars(e.target.value);
   }

   function countWordsAndChars(text) {
      let words = 0;
      let chars = 0;
      const trimmedText = text.trim();
      if (trimmedText) {
         words = trimmedText.split(/\s+/).length;
         chars = trimmedText.length;
      }

      return { words, chars };
   }
   

   const handleClearText = () => {
      setText('')
   }

   const handleEmailExtract = () =>{
      let email = text.match(/\S+@\S+\.\S+/);
      if (text && email){
         alert(email)
      } else {
         props.alert("Please enter text including email" ,'warning')
      }
   }

   const handleTitleCase = () =>{
     setText(toTitleCase(text))
   }

   // method to copy the text on clipboard
   const handleCopy = () => {
      var copyText = document.getElementById("text-area");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      props.alert('Copied to Clipboard','success')
   }

   function toTitleCase(text){
      return text.replace(/\w\S*/g, function (txt) {
         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
   }

 

   return (
      <div className='container' style={{ color : props.mode === 'light' ? 'black' : 'white' }}>
         <h3>{props.heading}</h3>
         <div className="form-group mb-3">
            <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', 
            color: props.mode === 'dark' ? 'white' : 'black' }}  placeholder='Enter text below' value={text} onChange={handleCounter} id="text-area" rows="8"></textarea>
         </div>

         <div className="row">
            <div className="col-md-2 col-lg-2">
               <button className={`btn w-100 btn-${props.mode}`} onClick={handleUpClick} >Uppercase</button>
            </div>
            <div className="col-md-2 col-lg-2">
               <button className={`btn w-100 btn-${props.mode}`} onClick={handleTitleCase} >Titlecase</button>
            </div>
            <div className="col-md-2 col-lg-2">
               <button className={`btn w-100 btn-${props.mode}`} onClick={handleClearText} >Clear</button>
            </div>
            <div className="col-md-2 col-lg-2">
               <button className={`btn w-100 btn-${props.mode}`} onClick={handleEmailExtract} >Extract Email</button>
            </div>
            <div className="col-md-2 col-lg-2">
               <button className={`btn w-100 btn-${props.mode}`} onClick={handleCopy} >Copy text</button>
            </div>
         </div>

         <div className="row my-3">
            <h4>Text Summary</h4>
            <p>{words} Word and {chars} Characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>

            <h3>Preview</h3>
            <p>
               {text.length > 0 ? text : 'Please enter your text above to preview here'}
            </p>
         </div>
      </div>
   )
}

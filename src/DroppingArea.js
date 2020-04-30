/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React, { useState } from 'react'
import './DroppingArea.css'

function DroppingArea(props) {
  const [dragFiles, setDragFiles] = useState(0)
  const [dragCounter, setDragCounter] = useState(0)
  
  function handleDragIn(e) {
    e.preventDefault()
    e.stopPropagation()
    setDragCounter(dragCounter + 1)
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragFiles(e.dataTransfer.items)
    }
  }
  
  function handleDragOut(e) {
    e.preventDefault()
    e.stopPropagation()
    setDragCounter(dragCounter - 1)
    if (dragCounter > 0) return
    setDragFiles([])
  }
  
  function handleDragOver(e) {
    e.preventDefault()
    e.stopPropagation()
  }
  
  function handleDrop(e) {
    e.preventDefault()
    e.stopPropagation()
    setDragCounter(0)
    if (e.dataTransfer.files && e.dataTransfer.files.length === 1) {
      props.handleDrop(e.dataTransfer.files)
    }
    setDragFiles([])
  }
  
  function message() {
    if (props.message) {
      return props.message(dragFiles)
    } else {
      return 'Drop your file(s) here'
    }
  }
  
  function isValid() {
    if (props.isValid) {
      return props.isValid(dragFiles)
    } else {
      return true
    }
  }
  
  return (
    <div onDragEnter={ e => handleDragIn(e) }
        onDragLeave={ e => handleDragOut(e) }
        onDragOver={ e => handleDragOver(e) }
        onDrop={ e => handleDrop(e) }
        className='dropping-area'>
          { dragFiles.length > 0 &&
          <div className={ isValid() ? 'valid dashed-overlay' : 'invalid dashed-overlay' }>
            <div className='centered-label'>
              <div>{ message() }</div>
            </div>
          </div>
        }
      {props.children}
    </div>
  )
}

export default DroppingArea;

import { useState, useEffect } from 'react'

/**
 * Hook for handling closing when clicking outside of an element
 * from: https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 * @param {React.node} el
 * @param {boolean} initialState
 */
export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState)
  useEffect(() => {
    const onClick = (e) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive)
      }
    }
    // If the item is active (ie open) then listen for clicks outside
    if (isActive) window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [isActive, el])
  return [isActive, setIsActive]
}



# useInView Hook

The `useInView` hook is a React hook designed to determine whether a specified HTML element is currently in the viewport. It provides information about the element's visibility, the scroll direction, and the last scroll position.

## Installation

No specific installation steps are required for this hook. Simply import it into your React components as needed.

```jsx
import { useEffect } from 'react';
import { useInView } from '@/hooks/useInView';
```

## Usage

### `useInView` Hook

#### Returns

- `inView: boolean`: Indicates whether the specified element is currently in the viewport.
- `scrollUp: boolean`: Indicates whether the user is scrolling up.
- `lastYPos: number`: The last known vertical scroll position.

#### Example

In a React component:

```jsx
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

const MyComponent = () => {
  const myElementRef = useRef(null);
  const { inView, scrollUp, lastYPos } = useInView(myElementRef);

  return (
    <div ref={myElementRef}>
      <p>{inView ? 'In view!' : 'Out of view.'}</p>
      <p>{scrollUp ? 'Scrolling up!' : 'Scrolling down.'}</p>
      <p>Last Y Position: {lastYPos}</p>
    </div>
  );
};

export default MyComponent;
```

## Details

### Parameters

- `elRef: RefObject<HTMLElement>`: A React ref object pointing to the HTML element to be tracked.
- `offset: number`: An optional offset value to consider when determining whether the element is in view.

### Return Values

- `inView: boolean`: Indicates whether the specified element is currently in the viewport.
- `scrollUp: boolean`: Indicates whether the user is scrolling up.
- `lastYPos: number`: The last known vertical scroll position.

### Notes

- This hook is designed to be used in a client-side context and checks for the existence of the `window` object.


# React useRef Usage

This React application demonstrates the usage of the `useRef` hook.

`useRef` is a React Hook that creates a mutable object to hold a reference to a value, persisting across renders without triggering a re-render.

## Purpose

The `useRef` hook is utilized to maintain a reference to a variable (`count`). In this application, `count` keeps track of how many times the component is rendered without causing additional renders.

### Important

If we use the state to count the number of times our component renders, then every time that state changes, our component re-renders, potentially leading to an infinite loop of re-renders.

## How it Works

- The `useRef` hook is initialized with an initial value of `0`.
- Whenever the component re-renders (due to state changes), the `useEffect` hook increments the `count`.
- The count is displayed to the user, showcasing the number of times the component has been rendered.

This usage of `useRef` allows for preserving values across re-renders without causing re-renders when the value changes.

// This file help us to read json data
// This will work in offline mode also

declare module '*.json' {
  const value: any;
  export default value;
}

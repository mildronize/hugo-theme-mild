// This is required to import
// Ref: https://bobbyhadz.com/blog/typescript-augmentations-for-global-scope-can-only-be-directly-nested
export { };

declare global {
  interface Window {
    App: any;
    $: any;
  }

}
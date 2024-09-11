// custom.d.ts or similar file in the root
declare module "*.mp4" {
  const src: string;
  export default src;
}


export default {
  source: [
    "packages/tokens/primitives.json",
    "packages/tokens/semantic.json"
  ],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "packages/styles/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables"
        }
      ]
    }
  }
};

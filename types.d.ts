declare module '@eslint/js' {
  const js: {
    configs: {
      recommended: any;
    };
  };
  export default js;
}

declare module 'typescript-eslint' {
  const tseslint: {
    config: (...args: any[]) => any;
    configs: {
      recommended: any[];
    };
  };
  export default tseslint;
}

declare module 'eslint-plugin-react' {
  const react: any;
  export default react;
}

declare module 'eslint-plugin-react-hooks' {
  const reactHooks: {
    configs: {
      recommended: {
        rules: any;
      };
    };
  };
  export default reactHooks;
}

declare module 'eslint-plugin-react-refresh' {
  const reactRefresh: any;
  export default reactRefresh;
}

declare module 'globals' {
  const globals: {
    browser: any;
    node: any;
    [key: string]: any;
  };
  export default globals;
}
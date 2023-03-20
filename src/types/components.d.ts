export module Components {
  export interface DeferredComponentProps {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
    resolveName: string;
  }

  export interface ButtonProps {
    name?: string;
    toggleName?: string;
    toggler?: boolean;
    onClick?: () => void;
    [key: string]: any;
  }

  export interface LinkProps {
    path?: string;
  }
}

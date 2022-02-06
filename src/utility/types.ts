export type ConditionalClass = [boolean, ...(string | ConditionalClass)[]];
export type SvgComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

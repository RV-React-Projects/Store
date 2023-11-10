export interface headerDataTypes {
  name: string;
  value: string;
  icon?: React.ReactNode;
  onlyIcon?: boolean;
}

export interface DropDownTypes {
  data: headerDataTypes[];
  selected?: string;
  onlyIcon?: boolean;
  onPressItem?: (val: string) => void;
}

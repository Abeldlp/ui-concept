export interface Column {
  name: string;
  label: string;
  field: string;
  required: boolean;
  align: string;
  sortable: boolean;
  sortOrder?: string;
}

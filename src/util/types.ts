export type Column = {
	id: string;
	ordinalNo: number;
	title: string;
	type: string;
	selectOptions?: string[];
	width?: number;
}

export type Row = {
  id: string;
  [columnId: string]: string | number | boolean | string[] | undefined;
}

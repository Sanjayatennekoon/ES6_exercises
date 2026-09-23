// if we export as below,
export function namedExport() {}
//then we must import as below
import { namedExport } from "...";

//if we export as below
export default function defaultExport() {}
//then we must import as below
import defaultExport from "..."


// if both have,
export default function bothExport(){}
export function namedExport1() {}
//then we must import as below
import BothExport, { namedExport1 } from "...";

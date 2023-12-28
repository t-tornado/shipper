export function ReturnIf(condition: boolean, node: any) {
  if (condition) return node;
  return null;
}
export function ReturnCondition(
  condition: boolean,
  truthyNode: any,
  falsyNode: any
) {
  if (condition) return truthyNode;
  return falsyNode;
}

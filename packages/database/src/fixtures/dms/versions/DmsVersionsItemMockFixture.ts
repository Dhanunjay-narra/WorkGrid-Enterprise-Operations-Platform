export function generateDmsVersionsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

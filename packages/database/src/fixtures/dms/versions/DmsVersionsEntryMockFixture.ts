export function generateDmsVersionsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

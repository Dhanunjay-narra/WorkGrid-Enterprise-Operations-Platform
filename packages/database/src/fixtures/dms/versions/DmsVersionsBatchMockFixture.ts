export function generateDmsVersionsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

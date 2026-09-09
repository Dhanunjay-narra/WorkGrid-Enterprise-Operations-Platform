export function generateDmsVersionsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

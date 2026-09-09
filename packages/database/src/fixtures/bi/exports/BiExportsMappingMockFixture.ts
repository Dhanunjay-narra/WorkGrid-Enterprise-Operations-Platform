export function generateBiExportsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

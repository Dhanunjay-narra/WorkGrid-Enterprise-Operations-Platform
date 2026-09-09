export function generateBiExportsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

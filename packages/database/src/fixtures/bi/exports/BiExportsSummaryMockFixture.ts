export function generateBiExportsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

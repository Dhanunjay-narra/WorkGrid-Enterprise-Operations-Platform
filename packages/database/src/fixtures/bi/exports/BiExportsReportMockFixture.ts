export function generateBiExportsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

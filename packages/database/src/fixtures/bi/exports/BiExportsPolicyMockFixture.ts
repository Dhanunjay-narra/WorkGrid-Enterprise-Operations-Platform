export function generateBiExportsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

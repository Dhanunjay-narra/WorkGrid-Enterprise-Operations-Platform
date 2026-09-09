export function generateBiExportsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

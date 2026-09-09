export function generateBiExportsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

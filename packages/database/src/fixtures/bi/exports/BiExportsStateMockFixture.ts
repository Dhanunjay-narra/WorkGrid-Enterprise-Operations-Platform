export function generateBiExportsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

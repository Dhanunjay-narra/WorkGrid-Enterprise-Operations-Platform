export function generateBiExportsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

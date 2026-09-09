export function generateBiExportsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

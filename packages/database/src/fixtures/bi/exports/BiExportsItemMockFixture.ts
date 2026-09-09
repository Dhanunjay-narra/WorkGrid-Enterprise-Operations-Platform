export function generateBiExportsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

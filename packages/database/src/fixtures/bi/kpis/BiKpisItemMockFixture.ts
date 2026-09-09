export function generateBiKpisItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

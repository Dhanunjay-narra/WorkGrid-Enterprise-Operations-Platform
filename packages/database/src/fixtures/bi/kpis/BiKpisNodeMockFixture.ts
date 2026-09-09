export function generateBiKpisNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

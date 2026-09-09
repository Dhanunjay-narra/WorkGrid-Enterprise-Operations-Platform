export function generateBiKpisStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

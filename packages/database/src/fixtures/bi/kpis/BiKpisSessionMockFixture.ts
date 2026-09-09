export function generateBiKpisSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

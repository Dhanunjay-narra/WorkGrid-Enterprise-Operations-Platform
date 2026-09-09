export function generateBiKpisQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

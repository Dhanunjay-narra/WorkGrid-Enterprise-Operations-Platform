export function generateBiKpisTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

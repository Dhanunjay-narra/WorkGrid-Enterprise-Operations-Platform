export function generateBiKpisScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

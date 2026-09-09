export function generateBiKpisPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

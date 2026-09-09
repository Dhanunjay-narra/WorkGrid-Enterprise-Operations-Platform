export function generateBiKpisMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

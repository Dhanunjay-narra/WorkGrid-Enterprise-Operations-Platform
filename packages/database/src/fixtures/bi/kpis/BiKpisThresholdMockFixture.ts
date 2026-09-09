export function generateBiKpisThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

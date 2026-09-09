export function generateBiKpisConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

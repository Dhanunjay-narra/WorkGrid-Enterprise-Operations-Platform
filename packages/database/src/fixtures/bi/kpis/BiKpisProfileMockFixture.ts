export function generateBiKpisProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

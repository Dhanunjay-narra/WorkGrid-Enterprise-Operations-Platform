export function generateBiKpisRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

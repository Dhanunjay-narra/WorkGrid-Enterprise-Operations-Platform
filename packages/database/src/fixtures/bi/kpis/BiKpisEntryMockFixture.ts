export function generateBiKpisEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

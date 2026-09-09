export function generateBiKpisRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

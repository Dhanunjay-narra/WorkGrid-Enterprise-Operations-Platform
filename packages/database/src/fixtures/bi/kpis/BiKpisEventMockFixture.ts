export function generateBiKpisEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

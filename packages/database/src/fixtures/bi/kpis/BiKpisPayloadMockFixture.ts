export function generateBiKpisPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

export function generateBiKpisSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

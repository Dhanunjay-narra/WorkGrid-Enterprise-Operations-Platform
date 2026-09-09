export function generateBiWidgetsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

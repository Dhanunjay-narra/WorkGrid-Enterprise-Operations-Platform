export function generateIntSyncSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

export function generateIntSyncReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

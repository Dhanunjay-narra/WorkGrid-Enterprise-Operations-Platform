export function generateIntSyncScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

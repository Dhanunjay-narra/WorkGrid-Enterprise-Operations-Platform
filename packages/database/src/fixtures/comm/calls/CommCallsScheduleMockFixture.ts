export function generateCommCallsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

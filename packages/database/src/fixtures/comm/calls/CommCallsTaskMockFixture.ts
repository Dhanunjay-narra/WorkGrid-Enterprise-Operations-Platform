export function generateCommCallsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

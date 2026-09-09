export function generateCommThreadsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

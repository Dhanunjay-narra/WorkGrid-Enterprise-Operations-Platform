export function generateCommThreadsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

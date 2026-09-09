export function generateCommThreadsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

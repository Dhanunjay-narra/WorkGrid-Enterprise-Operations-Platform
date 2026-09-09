export function generateCommCallsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

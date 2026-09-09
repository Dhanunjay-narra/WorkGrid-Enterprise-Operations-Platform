export function generateCommPresenceRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

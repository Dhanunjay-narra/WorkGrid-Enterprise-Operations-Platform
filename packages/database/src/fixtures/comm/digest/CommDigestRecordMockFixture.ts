export function generateCommDigestRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

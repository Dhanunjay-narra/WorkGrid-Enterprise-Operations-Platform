export function generateCommDigestTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

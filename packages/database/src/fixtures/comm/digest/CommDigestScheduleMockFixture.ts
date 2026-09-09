export function generateCommDigestScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

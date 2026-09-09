export function generateSecurityRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

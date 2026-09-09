export function generateDmsRetentionSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

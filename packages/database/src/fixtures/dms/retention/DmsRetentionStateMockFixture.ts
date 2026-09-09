export function generateDmsRetentionStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

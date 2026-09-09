export function generateDmsRetentionPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

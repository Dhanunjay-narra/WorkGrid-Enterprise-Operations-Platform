export function generateDmsRetentionRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

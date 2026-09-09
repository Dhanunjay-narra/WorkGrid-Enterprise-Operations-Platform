export function generateDmsRetentionProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

export function generateDmsRetentionConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

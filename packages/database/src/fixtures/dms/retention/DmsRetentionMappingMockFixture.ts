export function generateDmsRetentionMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

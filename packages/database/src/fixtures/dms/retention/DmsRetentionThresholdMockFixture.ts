export function generateDmsRetentionThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

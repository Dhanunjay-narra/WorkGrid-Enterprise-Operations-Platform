export function generateDmsRetentionSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

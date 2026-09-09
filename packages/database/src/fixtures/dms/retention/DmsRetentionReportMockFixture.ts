export function generateDmsRetentionReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

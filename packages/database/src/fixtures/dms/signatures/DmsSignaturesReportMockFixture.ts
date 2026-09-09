export function generateDmsSignaturesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

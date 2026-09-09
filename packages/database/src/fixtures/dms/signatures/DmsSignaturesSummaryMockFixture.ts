export function generateDmsSignaturesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

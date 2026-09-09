export function generateDmsSignaturesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

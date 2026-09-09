export function generateDmsSignaturesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

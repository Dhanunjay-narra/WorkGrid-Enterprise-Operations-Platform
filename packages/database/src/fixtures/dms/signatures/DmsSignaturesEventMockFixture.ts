export function generateDmsSignaturesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

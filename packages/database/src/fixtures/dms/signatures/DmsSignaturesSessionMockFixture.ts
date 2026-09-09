export function generateDmsSignaturesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

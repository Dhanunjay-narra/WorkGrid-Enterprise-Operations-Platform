export function generateDmsSignaturesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

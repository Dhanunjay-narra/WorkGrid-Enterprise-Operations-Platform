export function generateDmsSignaturesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

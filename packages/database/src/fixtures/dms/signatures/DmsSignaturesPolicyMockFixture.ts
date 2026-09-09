export function generateDmsSignaturesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

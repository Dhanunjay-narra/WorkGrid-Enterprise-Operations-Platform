export function generateDmsSignaturesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

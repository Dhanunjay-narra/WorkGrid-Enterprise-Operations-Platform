export function generateDmsSignaturesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

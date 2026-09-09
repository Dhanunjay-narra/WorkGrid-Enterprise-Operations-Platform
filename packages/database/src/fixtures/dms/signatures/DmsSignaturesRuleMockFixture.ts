export function generateDmsSignaturesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

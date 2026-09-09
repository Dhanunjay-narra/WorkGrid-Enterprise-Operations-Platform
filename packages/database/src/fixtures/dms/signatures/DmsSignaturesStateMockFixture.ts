export function generateDmsSignaturesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

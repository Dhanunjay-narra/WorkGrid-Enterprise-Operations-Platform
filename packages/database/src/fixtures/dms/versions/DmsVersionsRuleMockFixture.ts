export function generateDmsVersionsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

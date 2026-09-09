export function generateDmsVersionsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

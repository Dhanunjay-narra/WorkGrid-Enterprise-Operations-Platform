export function generateDmsVersionsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

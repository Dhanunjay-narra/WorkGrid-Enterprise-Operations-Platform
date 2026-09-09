export function generateDmsVersionsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

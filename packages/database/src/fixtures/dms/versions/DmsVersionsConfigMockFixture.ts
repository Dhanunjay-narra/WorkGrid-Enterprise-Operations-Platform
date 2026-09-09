export function generateDmsVersionsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

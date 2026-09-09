export function generateDmsVersionsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

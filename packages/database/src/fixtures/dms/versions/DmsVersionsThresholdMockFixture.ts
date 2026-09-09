export function generateDmsVersionsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

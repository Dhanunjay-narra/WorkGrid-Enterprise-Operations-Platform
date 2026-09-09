export function generateDmsVersionsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

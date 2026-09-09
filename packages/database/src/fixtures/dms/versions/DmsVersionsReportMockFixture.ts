export function generateDmsVersionsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

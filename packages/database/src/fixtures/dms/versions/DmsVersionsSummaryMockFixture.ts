export function generateDmsVersionsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

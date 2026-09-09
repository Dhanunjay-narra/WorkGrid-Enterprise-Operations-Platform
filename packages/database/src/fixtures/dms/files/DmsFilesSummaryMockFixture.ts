export function generateDmsFilesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

export function generateDmsFilesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

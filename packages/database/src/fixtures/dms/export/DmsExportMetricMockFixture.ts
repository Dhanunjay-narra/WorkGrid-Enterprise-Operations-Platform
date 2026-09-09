export function generateDmsExportMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

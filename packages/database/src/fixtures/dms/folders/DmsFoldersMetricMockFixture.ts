export function generateDmsFoldersMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

export function generateProjectCapacityReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

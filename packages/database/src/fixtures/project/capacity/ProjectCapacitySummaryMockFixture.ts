export function generateProjectCapacitySummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacitySummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

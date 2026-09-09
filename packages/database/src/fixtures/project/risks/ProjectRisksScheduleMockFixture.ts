export function generateProjectRisksScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

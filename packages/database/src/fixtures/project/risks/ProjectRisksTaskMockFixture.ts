export function generateProjectRisksTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

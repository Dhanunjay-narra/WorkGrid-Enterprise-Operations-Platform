export function generateProjectRisksSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

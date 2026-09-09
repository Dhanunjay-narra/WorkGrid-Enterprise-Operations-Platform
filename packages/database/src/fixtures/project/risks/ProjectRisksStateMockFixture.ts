export function generateProjectRisksStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

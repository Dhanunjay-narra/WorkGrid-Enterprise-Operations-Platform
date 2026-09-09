export function generateProjectRisksEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

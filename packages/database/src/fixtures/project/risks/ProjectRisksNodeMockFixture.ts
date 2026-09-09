export function generateProjectRisksNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

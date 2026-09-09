export function generateProjectRisksItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

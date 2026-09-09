export function generateProjectRisksEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

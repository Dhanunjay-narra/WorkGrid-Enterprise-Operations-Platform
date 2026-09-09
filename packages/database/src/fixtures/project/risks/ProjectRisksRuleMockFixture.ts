export function generateProjectRisksRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

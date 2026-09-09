export function generateProjectRisksPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

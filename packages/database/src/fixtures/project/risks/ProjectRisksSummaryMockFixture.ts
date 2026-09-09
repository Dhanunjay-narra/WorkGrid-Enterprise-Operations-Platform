export function generateProjectRisksSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

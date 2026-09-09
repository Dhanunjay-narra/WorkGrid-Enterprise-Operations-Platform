export function generateProjectRisksBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

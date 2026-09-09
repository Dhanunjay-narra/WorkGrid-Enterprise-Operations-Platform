export function generateProjectRisksMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

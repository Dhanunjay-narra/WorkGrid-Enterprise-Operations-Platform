export function generateProjectRisksThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

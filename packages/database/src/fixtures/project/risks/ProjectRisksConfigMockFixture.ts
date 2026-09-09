export function generateProjectRisksConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

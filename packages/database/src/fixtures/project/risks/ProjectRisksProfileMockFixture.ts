export function generateProjectRisksProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

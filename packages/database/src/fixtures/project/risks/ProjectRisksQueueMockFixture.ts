export function generateProjectRisksQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

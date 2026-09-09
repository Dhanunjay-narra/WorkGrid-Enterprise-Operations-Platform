export function generateProjectRisksTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

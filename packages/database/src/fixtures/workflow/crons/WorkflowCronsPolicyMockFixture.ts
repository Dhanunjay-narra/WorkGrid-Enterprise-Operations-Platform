export function generateWorkflowCronsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

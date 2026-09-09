export function generateWorkflowCronsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

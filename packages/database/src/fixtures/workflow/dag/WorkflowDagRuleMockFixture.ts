export function generateWorkflowDagRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

export function generateWorkflowDagPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

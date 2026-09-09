export function generateWorkflowDagAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

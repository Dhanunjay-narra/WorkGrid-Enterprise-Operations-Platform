export function generateWorkflowDagNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

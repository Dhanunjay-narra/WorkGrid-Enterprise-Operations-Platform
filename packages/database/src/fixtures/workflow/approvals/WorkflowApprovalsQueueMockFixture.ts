export function generateWorkflowApprovalsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

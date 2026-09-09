export function generateWorkflowApprovalsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

export function generateWorkflowApprovalsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

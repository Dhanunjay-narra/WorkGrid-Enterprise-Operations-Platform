export function generateWorkflowEdgesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

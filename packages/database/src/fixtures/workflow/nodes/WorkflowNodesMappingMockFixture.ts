export function generateWorkflowNodesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_nodes",
    entity: "WorkflowNodesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

export function generateCrmPipelineSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

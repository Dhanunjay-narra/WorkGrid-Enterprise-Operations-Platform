export function generateCrmPipelineAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

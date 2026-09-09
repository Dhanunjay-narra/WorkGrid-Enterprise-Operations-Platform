export function generateAiEvaluationsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

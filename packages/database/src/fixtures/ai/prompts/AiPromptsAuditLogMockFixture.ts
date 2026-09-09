export function generateAiPromptsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

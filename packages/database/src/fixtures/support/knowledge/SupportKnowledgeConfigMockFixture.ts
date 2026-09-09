export function generateSupportKnowledgeConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

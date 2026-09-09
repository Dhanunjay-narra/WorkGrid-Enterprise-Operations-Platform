export function generateSupportKnowledgeProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

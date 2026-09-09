export function generateSupportKnowledgeNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

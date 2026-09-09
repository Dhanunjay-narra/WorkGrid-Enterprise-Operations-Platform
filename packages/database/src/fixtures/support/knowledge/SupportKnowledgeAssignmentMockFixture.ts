export function generateSupportKnowledgeAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

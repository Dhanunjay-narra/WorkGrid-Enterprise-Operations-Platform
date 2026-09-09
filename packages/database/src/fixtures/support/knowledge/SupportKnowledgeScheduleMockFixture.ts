export function generateSupportKnowledgeScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_knowledge",
    entity: "SupportKnowledgeSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

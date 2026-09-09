export function generateAiMemoryAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

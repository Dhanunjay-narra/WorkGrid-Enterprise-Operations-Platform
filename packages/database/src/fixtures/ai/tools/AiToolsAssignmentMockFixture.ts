export function generateAiToolsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

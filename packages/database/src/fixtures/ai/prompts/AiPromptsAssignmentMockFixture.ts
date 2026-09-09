export function generateAiPromptsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_prompts",
    entity: "AiPromptsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

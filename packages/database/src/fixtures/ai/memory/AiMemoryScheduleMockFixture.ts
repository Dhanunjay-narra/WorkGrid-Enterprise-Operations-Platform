export function generateAiMemoryScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemorySchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

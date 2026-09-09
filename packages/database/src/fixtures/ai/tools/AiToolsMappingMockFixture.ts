export function generateAiToolsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

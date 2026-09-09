export function generateAiEvaluationsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_evaluations",
    entity: "AiEvaluationsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}

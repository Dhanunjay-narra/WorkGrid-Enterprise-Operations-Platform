export class AiEmbeddingsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsAssignment" };
  }
}

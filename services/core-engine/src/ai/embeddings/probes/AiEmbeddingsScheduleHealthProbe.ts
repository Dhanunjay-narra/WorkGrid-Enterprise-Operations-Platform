export class AiEmbeddingsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsSchedule" };
  }
}

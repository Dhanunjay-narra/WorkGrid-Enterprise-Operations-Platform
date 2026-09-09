export class AiEmbeddingsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsReport" };
  }
}

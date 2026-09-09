export class AiRagReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagReport" };
  }
}

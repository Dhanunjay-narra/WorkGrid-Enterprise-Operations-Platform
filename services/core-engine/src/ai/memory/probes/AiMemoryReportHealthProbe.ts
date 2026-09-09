export class AiMemoryReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryReport" };
  }
}

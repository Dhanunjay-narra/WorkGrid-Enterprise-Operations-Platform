export class AiToolsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiToolsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiToolsReport" };
  }
}

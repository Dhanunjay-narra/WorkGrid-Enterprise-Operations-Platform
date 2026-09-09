export class AiAgentsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsReport" };
  }
}

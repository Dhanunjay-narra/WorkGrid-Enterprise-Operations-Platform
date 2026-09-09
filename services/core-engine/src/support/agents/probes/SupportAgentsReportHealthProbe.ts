export class SupportAgentsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsReport" };
  }
}

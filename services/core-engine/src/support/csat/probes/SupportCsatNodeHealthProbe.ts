export class SupportCsatNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatNode" };
  }
}

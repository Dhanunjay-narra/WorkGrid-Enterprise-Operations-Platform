export class SupportCsatTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatTask" };
  }
}

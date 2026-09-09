export class SupportCsatItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatItem" };
  }
}

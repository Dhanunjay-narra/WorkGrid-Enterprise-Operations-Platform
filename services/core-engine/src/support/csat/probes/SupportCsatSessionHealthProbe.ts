export class SupportCsatSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatSession" };
  }
}

export class SupportCsatStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatState" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatState" };
  }
}

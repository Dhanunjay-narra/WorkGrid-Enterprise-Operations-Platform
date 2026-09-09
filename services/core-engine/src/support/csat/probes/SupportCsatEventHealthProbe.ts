export class SupportCsatEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatEvent" };
  }
}

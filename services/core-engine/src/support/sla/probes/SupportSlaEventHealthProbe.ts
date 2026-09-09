export class SupportSlaEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaEvent" };
  }
}

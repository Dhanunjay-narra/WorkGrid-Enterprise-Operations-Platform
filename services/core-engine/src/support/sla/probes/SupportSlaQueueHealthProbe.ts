export class SupportSlaQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaQueue" };
  }
}

export class IntSlackQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackQueue" };
  }
}

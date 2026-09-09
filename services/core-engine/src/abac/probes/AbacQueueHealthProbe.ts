export class AbacQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacQueue" };
  }
}

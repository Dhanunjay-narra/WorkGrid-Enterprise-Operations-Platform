export class AbacItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacItem" };
  }
}

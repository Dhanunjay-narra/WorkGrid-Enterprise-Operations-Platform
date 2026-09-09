export class AbacTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacTask" };
  }
}

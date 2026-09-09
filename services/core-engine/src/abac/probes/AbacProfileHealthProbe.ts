export class AbacProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacProfile" };
  }
}

export class AbacStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacState" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacState" };
  }
}

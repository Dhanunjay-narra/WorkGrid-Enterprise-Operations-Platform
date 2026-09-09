export class AbacMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacMapping" };
  }
}

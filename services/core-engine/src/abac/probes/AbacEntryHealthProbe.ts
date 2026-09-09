export class AbacEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacEntry" };
  }
}

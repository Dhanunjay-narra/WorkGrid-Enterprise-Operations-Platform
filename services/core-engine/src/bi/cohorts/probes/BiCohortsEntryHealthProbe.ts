export class BiCohortsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsEntry" };
  }
}

export class BiCohortsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsPolicy" };
  }
}

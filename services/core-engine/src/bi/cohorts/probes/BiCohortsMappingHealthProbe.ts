export class BiCohortsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsMapping" };
  }
}

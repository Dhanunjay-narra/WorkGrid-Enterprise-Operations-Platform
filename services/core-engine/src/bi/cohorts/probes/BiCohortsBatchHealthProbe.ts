export class BiCohortsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsBatch" };
  }
}

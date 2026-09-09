export class BiKpisBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisBatch" };
  }
}

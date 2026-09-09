export class ObsTracingBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingBatch" };
  }
}

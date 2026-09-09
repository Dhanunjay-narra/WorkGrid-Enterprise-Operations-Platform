export class ObsProfilingBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingBatch" };
  }
}

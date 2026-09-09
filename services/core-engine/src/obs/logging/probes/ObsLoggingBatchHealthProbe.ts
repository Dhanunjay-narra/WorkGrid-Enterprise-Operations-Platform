export class ObsLoggingBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingBatch" };
  }
}

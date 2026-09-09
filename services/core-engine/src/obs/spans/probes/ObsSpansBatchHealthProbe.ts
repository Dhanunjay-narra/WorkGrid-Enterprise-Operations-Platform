export class ObsSpansBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansBatch" };
  }
}

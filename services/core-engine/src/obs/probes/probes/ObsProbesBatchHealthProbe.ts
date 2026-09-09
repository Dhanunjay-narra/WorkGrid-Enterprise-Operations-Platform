export class ObsProbesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesBatch" };
  }
}

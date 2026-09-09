export class ObsProbesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesQueue" };
  }
}

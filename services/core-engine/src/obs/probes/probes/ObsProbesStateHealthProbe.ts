export class ObsProbesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesState" };
  }
}

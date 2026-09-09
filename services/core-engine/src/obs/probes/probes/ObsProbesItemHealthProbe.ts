export class ObsProbesItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesItem" };
  }
}

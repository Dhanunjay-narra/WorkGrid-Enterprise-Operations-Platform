export class ObsProbesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesNode" };
  }
}

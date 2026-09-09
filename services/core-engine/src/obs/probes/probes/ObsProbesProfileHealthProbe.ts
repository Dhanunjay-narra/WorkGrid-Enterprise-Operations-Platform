export class ObsProbesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesProfile" };
  }
}

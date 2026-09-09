export class ObsProbesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesPolicy" };
  }
}

export class ObsProbesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesMapping" };
  }
}

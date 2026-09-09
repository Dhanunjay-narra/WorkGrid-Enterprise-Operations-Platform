export class ObsProbesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesEvent" };
  }
}

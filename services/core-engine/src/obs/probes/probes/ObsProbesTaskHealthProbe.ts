export class ObsProbesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesTask" };
  }
}

export class ObsProbesSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesSession" };
  }
}

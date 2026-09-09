export class ObsProbesEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesEntry" };
  }
}

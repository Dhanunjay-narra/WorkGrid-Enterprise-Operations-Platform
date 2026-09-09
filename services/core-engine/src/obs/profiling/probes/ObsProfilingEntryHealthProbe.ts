export class ObsProfilingEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingEntry" };
  }
}

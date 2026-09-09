export class ObsTracingEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingEntry" };
  }
}

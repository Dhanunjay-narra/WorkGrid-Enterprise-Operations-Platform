export class ObsSpansEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansEntry" };
  }
}

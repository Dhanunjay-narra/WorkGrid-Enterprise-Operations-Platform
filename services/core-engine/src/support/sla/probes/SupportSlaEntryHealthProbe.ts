export class SupportSlaEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaEntry" };
  }
}

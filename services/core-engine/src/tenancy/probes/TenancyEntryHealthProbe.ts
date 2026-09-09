export class TenancyEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyEntry" };
  }
}

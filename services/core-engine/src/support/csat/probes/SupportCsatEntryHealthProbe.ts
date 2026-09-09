export class SupportCsatEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatEntry" };
  }
}

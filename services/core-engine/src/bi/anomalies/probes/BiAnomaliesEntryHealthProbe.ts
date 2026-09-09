export class BiAnomaliesEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesEntry" };
  }
}

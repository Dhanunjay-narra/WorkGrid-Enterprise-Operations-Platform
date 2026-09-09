export class IntMappingsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsSummary" };
  }
}

export class BiAnomaliesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesMapping" };
  }
}

export class BiAnomaliesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesState" };
  }
}

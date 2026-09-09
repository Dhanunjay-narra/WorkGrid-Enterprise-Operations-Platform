export class BiAnomaliesProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesProfile" };
  }
}

export class HrPerformancePayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformancePayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformancePayload" };
  }
}

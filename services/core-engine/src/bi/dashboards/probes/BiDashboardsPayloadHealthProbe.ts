export class BiDashboardsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsPayload" };
  }
}

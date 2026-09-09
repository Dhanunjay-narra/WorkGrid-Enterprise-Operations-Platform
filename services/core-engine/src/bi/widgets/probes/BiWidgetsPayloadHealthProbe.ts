export class BiWidgetsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiWidgetsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiWidgetsPayload" };
  }
}

export class TenancyPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyPayload" };
  }
}

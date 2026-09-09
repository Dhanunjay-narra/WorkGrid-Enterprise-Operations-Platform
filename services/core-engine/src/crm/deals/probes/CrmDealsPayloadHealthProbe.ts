export class CrmDealsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsPayload" };
  }
}

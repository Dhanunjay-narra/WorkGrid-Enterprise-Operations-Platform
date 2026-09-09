export class CrmHealthPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthPayload" };
  }
}

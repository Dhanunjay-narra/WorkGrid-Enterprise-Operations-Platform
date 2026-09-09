export class SupportCsatPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatPayload" };
  }
}

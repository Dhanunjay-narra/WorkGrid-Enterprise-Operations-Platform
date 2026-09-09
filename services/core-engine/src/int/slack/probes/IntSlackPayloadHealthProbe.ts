export class IntSlackPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackPayload" };
  }
}

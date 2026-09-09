export class IntStripePayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntStripePayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntStripePayload" };
  }
}

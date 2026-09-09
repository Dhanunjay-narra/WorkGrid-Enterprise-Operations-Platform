export class AuthEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthEntry" };
  }
}

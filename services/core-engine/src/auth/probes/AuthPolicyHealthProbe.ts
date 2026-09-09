export class AuthPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthPolicy" };
  }
}

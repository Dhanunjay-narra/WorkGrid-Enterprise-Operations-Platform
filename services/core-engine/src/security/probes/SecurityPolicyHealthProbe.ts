export class SecurityPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityPolicy" };
  }
}

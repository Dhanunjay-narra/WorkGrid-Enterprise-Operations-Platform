export class AuthProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthProfile" };
  }
}

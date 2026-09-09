export class IntOauthTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthTask" };
  }
}

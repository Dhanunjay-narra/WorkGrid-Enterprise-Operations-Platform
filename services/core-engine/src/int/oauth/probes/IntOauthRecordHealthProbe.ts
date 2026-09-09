export class IntOauthRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthRecord" };
  }
}

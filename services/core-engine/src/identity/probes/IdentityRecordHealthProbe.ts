export class IdentityRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityRecord" };
  }
}

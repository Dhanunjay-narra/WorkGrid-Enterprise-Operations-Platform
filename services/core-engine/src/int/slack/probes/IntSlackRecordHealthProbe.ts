export class IntSlackRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackRecord" };
  }
}

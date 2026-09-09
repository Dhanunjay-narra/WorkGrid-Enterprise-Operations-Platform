export class CommMessagesRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesRecord" };
  }
}

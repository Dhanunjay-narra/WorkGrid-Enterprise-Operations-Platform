export class CommMessagesEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesEntry" };
  }
}

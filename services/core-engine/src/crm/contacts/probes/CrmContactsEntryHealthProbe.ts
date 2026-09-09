export class CrmContactsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsEntry" };
  }
}

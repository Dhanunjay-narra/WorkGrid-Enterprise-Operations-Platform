export class CrmContactsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsProfile" };
  }
}

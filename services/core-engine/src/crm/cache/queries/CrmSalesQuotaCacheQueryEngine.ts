export class CrmSalesQuotaCacheQueryEngine {
  public async mget(keys: string[]): Promise<Map<string, any>> {
    const results = new Map<string, any>();
    keys.forEach(k => results.set(k, { key: k, domain: "crm", entity: "CrmSalesQuota" }));
    return results;
  }
}

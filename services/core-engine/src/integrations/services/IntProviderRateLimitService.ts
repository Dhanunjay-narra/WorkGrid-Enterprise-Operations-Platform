import { IntProviderRateLimitData, IntProviderRateLimitValidator } from "../../../../packages/types/src/domains/integrations/IntProviderRateLimit";

export class IntProviderRateLimitService {
  private repository = new Map<string, IntProviderRateLimitData>();

  public create(data: Omit<IntProviderRateLimitData, "id" | "createdAt" | "updatedAt">): IntProviderRateLimitData {
    const id = "int_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IntProviderRateLimitData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntProviderRateLimitValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntProviderRateLimit: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntProviderRateLimitData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IntProviderRateLimitData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IntProviderRateLimitData>): IntProviderRateLimitData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntProviderRateLimitData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}

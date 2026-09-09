import { SecRateLimitCounterData, SecRateLimitCounterValidator } from "../../../../packages/types/src/domains/security/SecRateLimitCounter";

export class SecRateLimitCounterService {
  private repository = new Map<string, SecRateLimitCounterData>();

  public create(data: Omit<SecRateLimitCounterData, "id" | "createdAt" | "updatedAt">): SecRateLimitCounterData {
    const id = "sec_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SecRateLimitCounterData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecRateLimitCounterValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecRateLimitCounter: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecRateLimitCounterData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SecRateLimitCounterData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SecRateLimitCounterData>): SecRateLimitCounterData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecRateLimitCounterData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}

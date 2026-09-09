import { SupSlaTimerData, SupSlaTimerValidator } from "../../../../packages/types/src/domains/support/SupSlaTimer";

export class SupSlaTimerService {
  private repository = new Map<string, SupSlaTimerData>();

  public create(data: Omit<SupSlaTimerData, "id" | "createdAt" | "updatedAt">): SupSlaTimerData {
    const id = "sup_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SupSlaTimerData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupSlaTimerValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupSlaTimer: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupSlaTimerData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SupSlaTimerData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SupSlaTimerData>): SupSlaTimerData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupSlaTimerData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}

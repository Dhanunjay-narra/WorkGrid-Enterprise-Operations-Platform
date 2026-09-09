import { SupportSlaThresholdModel, SupportSlaThresholdValidator } from "@nexora/types/domains/support/sla/SupportSlaThreshold";

export class SupportSlaThresholdService {
  private repository = new Map<string, SupportSlaThresholdModel>();

  public create(data: Omit<SupportSlaThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaThresholdModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaThresholdModel>): SupportSlaThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaThresholdModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}

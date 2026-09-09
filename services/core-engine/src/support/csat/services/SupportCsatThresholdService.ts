import { SupportCsatThresholdModel, SupportCsatThresholdValidator } from "@nexora/types/domains/support/csat/SupportCsatThreshold";

export class SupportCsatThresholdService {
  private repository = new Map<string, SupportCsatThresholdModel>();

  public create(data: Omit<SupportCsatThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatThresholdModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatThresholdModel>): SupportCsatThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatThresholdModel = {
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

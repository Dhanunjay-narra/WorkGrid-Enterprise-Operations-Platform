import { AbacThresholdModel, AbacThresholdValidator } from "@nexora/types/domains/abac/AbacThreshold";

export class AbacThresholdService {
  private repository = new Map<string, AbacThresholdModel>();

  public create(data: Omit<AbacThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): AbacThresholdModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacThresholdModel>): AbacThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacThresholdModel = {
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

import { IdentityThresholdModel, IdentityThresholdValidator } from "@nexora/types/domains/identity/IdentityThreshold";

export class IdentityThresholdService {
  private repository = new Map<string, IdentityThresholdModel>();

  public create(data: Omit<IdentityThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): IdentityThresholdModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentityThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentityThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentityThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentityThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentityThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentityThresholdModel>): IdentityThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentityThresholdModel = {
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

import { SupportSlaBatchModel, SupportSlaBatchValidator } from "@nexora/types/domains/support/sla/SupportSlaBatch";

export class SupportSlaBatchService {
  private repository = new Map<string, SupportSlaBatchModel>();

  public create(data: Omit<SupportSlaBatchModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaBatchModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaBatchModel>): SupportSlaBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaBatchModel = {
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

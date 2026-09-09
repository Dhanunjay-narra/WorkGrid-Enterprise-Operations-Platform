import { SupportSlaMappingModel, SupportSlaMappingValidator } from "@nexora/types/domains/support/sla/SupportSlaMapping";

export class SupportSlaMappingService {
  private repository = new Map<string, SupportSlaMappingModel>();

  public create(data: Omit<SupportSlaMappingModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaMappingModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaMappingModel>): SupportSlaMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaMappingModel = {
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

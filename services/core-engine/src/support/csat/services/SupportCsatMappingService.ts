import { SupportCsatMappingModel, SupportCsatMappingValidator } from "@nexora/types/domains/support/csat/SupportCsatMapping";

export class SupportCsatMappingService {
  private repository = new Map<string, SupportCsatMappingModel>();

  public create(data: Omit<SupportCsatMappingModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatMappingModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatMappingModel>): SupportCsatMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatMappingModel = {
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

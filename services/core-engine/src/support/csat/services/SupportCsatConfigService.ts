import { SupportCsatConfigModel, SupportCsatConfigValidator } from "@nexora/types/domains/support/csat/SupportCsatConfig";

export class SupportCsatConfigService {
  private repository = new Map<string, SupportCsatConfigModel>();

  public create(data: Omit<SupportCsatConfigModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatConfigModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatConfigModel>): SupportCsatConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatConfigModel = {
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

import { SupportSlaConfigModel, SupportSlaConfigValidator } from "@nexora/types/domains/support/sla/SupportSlaConfig";

export class SupportSlaConfigService {
  private repository = new Map<string, SupportSlaConfigModel>();

  public create(data: Omit<SupportSlaConfigModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaConfigModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaConfigModel>): SupportSlaConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaConfigModel = {
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

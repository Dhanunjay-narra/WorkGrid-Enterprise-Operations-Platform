import { SupportSlaProfileModel, SupportSlaProfileValidator } from "@nexora/types/domains/support/sla/SupportSlaProfile";

export class SupportSlaProfileService {
  private repository = new Map<string, SupportSlaProfileModel>();

  public create(data: Omit<SupportSlaProfileModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaProfileModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaProfileModel>): SupportSlaProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaProfileModel = {
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

import { SupportEscalationProfileModel, SupportEscalationProfileValidator } from "@nexora/types/domains/support/escalation/SupportEscalationProfile";

export class SupportEscalationProfileService {
  private repository = new Map<string, SupportEscalationProfileModel>();

  public create(data: Omit<SupportEscalationProfileModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationProfileModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationProfileModel>): SupportEscalationProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationProfileModel = {
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

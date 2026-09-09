import { SupportCsatProfileModel, SupportCsatProfileValidator } from "@nexora/types/domains/support/csat/SupportCsatProfile";

export class SupportCsatProfileService {
  private repository = new Map<string, SupportCsatProfileModel>();

  public create(data: Omit<SupportCsatProfileModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatProfileModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatProfileModel>): SupportCsatProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatProfileModel = {
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

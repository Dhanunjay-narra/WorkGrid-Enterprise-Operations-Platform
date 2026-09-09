import { SupportCsatSessionModel, SupportCsatSessionValidator } from "@nexora/types/domains/support/csat/SupportCsatSession";

export class SupportCsatSessionService {
  private repository = new Map<string, SupportCsatSessionModel>();

  public create(data: Omit<SupportCsatSessionModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatSessionModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatSessionModel>): SupportCsatSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatSessionModel = {
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

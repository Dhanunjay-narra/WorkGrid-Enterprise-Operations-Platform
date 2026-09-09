import { SupportCsatTaskModel, SupportCsatTaskValidator } from "@nexora/types/domains/support/csat/SupportCsatTask";

export class SupportCsatTaskService {
  private repository = new Map<string, SupportCsatTaskModel>();

  public create(data: Omit<SupportCsatTaskModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatTaskModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatTaskModel>): SupportCsatTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatTaskModel = {
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

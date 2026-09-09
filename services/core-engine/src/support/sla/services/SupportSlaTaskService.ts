import { SupportSlaTaskModel, SupportSlaTaskValidator } from "@nexora/types/domains/support/sla/SupportSlaTask";

export class SupportSlaTaskService {
  private repository = new Map<string, SupportSlaTaskModel>();

  public create(data: Omit<SupportSlaTaskModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaTaskModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaTaskModel>): SupportSlaTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaTaskModel = {
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

import { SupportSlaNodeModel, SupportSlaNodeValidator } from "@nexora/types/domains/support/sla/SupportSlaNode";

export class SupportSlaNodeService {
  private repository = new Map<string, SupportSlaNodeModel>();

  public create(data: Omit<SupportSlaNodeModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaNodeModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaNodeModel>): SupportSlaNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaNodeModel = {
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

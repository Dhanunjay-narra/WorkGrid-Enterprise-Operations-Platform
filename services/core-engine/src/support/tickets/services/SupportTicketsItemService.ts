import { SupportTicketsItemModel, SupportTicketsItemValidator } from "@nexora/types/domains/support/tickets/SupportTicketsItem";

export class SupportTicketsItemService {
  private repository = new Map<string, SupportTicketsItemModel>();

  public create(data: Omit<SupportTicketsItemModel, "id" | "version" | "createdAt" | "updatedAt">): SupportTicketsItemModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportTicketsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportTicketsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportTicketsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportTicketsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportTicketsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportTicketsItemModel>): SupportTicketsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportTicketsItemModel = {
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

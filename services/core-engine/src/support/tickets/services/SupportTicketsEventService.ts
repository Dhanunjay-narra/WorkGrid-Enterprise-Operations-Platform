import { SupportTicketsEventModel, SupportTicketsEventValidator } from "@nexora/types/domains/support/tickets/SupportTicketsEvent";

export class SupportTicketsEventService {
  private repository = new Map<string, SupportTicketsEventModel>();

  public create(data: Omit<SupportTicketsEventModel, "id" | "version" | "createdAt" | "updatedAt">): SupportTicketsEventModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportTicketsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportTicketsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportTicketsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportTicketsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportTicketsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportTicketsEventModel>): SupportTicketsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportTicketsEventModel = {
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

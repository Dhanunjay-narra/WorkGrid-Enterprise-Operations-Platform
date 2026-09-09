import { SupportTicketsEntryModel, SupportTicketsEntryValidator } from "@nexora/types/domains/support/tickets/SupportTicketsEntry";

export class SupportTicketsEntryService {
  private repository = new Map<string, SupportTicketsEntryModel>();

  public create(data: Omit<SupportTicketsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): SupportTicketsEntryModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportTicketsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportTicketsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportTicketsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportTicketsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportTicketsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportTicketsEntryModel>): SupportTicketsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportTicketsEntryModel = {
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

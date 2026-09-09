import { SupportTicketsNodeModel, SupportTicketsNodeValidator } from "@nexora/types/domains/support/tickets/SupportTicketsNode";

export class SupportTicketsNodeService {
  private repository = new Map<string, SupportTicketsNodeModel>();

  public create(data: Omit<SupportTicketsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): SupportTicketsNodeModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportTicketsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportTicketsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportTicketsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportTicketsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportTicketsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportTicketsNodeModel>): SupportTicketsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportTicketsNodeModel = {
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

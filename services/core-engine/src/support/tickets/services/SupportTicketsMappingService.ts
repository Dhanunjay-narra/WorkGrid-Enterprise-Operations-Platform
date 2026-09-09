import { SupportTicketsMappingModel, SupportTicketsMappingValidator } from "@nexora/types/domains/support/tickets/SupportTicketsMapping";

export class SupportTicketsMappingService {
  private repository = new Map<string, SupportTicketsMappingModel>();

  public create(data: Omit<SupportTicketsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): SupportTicketsMappingModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportTicketsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportTicketsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportTicketsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportTicketsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportTicketsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportTicketsMappingModel>): SupportTicketsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportTicketsMappingModel = {
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

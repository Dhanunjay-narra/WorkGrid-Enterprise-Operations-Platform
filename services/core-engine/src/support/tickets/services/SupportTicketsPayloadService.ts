import { SupportTicketsPayloadModel, SupportTicketsPayloadValidator } from "@nexora/types/domains/support/tickets/SupportTicketsPayload";

export class SupportTicketsPayloadService {
  private repository = new Map<string, SupportTicketsPayloadModel>();

  public create(data: Omit<SupportTicketsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): SupportTicketsPayloadModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportTicketsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportTicketsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportTicketsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportTicketsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportTicketsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportTicketsPayloadModel>): SupportTicketsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportTicketsPayloadModel = {
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

import { SupportTicketsRecordModel, SupportTicketsRecordValidator } from "@nexora/types/domains/support/tickets/SupportTicketsRecord";

export class SupportTicketsRecordService {
  private repository = new Map<string, SupportTicketsRecordModel>();

  public create(data: Omit<SupportTicketsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): SupportTicketsRecordModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportTicketsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportTicketsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportTicketsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportTicketsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportTicketsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportTicketsRecordModel>): SupportTicketsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportTicketsRecordModel = {
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

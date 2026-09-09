import { SupportTicketsSnapshotModel, SupportTicketsSnapshotValidator } from "@nexora/types/domains/support/tickets/SupportTicketsSnapshot";

export class SupportTicketsSnapshotService {
  private repository = new Map<string, SupportTicketsSnapshotModel>();

  public create(data: Omit<SupportTicketsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): SupportTicketsSnapshotModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportTicketsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportTicketsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportTicketsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportTicketsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportTicketsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportTicketsSnapshotModel>): SupportTicketsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportTicketsSnapshotModel = {
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

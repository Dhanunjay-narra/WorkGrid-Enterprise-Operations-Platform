import { SupportTicketsProfileModel, SupportTicketsProfileValidator } from "@nexora/types/domains/support/tickets/SupportTicketsProfile";

export class SupportTicketsProfileService {
  private repository = new Map<string, SupportTicketsProfileModel>();

  public create(data: Omit<SupportTicketsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): SupportTicketsProfileModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportTicketsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportTicketsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportTicketsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportTicketsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportTicketsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportTicketsProfileModel>): SupportTicketsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportTicketsProfileModel = {
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

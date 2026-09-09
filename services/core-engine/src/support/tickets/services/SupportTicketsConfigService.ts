import { SupportTicketsConfigModel, SupportTicketsConfigValidator } from "@nexora/types/domains/support/tickets/SupportTicketsConfig";

export class SupportTicketsConfigService {
  private repository = new Map<string, SupportTicketsConfigModel>();

  public create(data: Omit<SupportTicketsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): SupportTicketsConfigModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportTicketsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportTicketsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportTicketsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportTicketsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportTicketsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportTicketsConfigModel>): SupportTicketsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportTicketsConfigModel = {
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

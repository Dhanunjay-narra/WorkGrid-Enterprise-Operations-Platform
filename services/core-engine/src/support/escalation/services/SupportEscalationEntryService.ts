import { SupportEscalationEntryModel, SupportEscalationEntryValidator } from "@nexora/types/domains/support/escalation/SupportEscalationEntry";

export class SupportEscalationEntryService {
  private repository = new Map<string, SupportEscalationEntryModel>();

  public create(data: Omit<SupportEscalationEntryModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationEntryModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationEntryModel>): SupportEscalationEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationEntryModel = {
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

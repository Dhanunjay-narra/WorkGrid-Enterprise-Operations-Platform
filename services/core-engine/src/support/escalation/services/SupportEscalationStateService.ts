import { SupportEscalationStateModel, SupportEscalationStateValidator } from "@nexora/types/domains/support/escalation/SupportEscalationState";

export class SupportEscalationStateService {
  private repository = new Map<string, SupportEscalationStateModel>();

  public create(data: Omit<SupportEscalationStateModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationStateModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationStateModel>): SupportEscalationStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationStateModel = {
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

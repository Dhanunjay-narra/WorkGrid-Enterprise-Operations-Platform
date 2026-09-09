import { SupportEscalationSessionModel, SupportEscalationSessionValidator } from "@nexora/types/domains/support/escalation/SupportEscalationSession";

export class SupportEscalationSessionService {
  private repository = new Map<string, SupportEscalationSessionModel>();

  public create(data: Omit<SupportEscalationSessionModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationSessionModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationSessionModel>): SupportEscalationSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationSessionModel = {
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

import { SupportEscalationThresholdModel, SupportEscalationThresholdValidator } from "@nexora/types/domains/support/escalation/SupportEscalationThreshold";

export class SupportEscalationThresholdService {
  private repository = new Map<string, SupportEscalationThresholdModel>();

  public create(data: Omit<SupportEscalationThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationThresholdModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationThresholdModel>): SupportEscalationThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationThresholdModel = {
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

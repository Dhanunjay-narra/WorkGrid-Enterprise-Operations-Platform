import { SupportEscalationNodeModel, SupportEscalationNodeValidator } from "@nexora/types/domains/support/escalation/SupportEscalationNode";

export class SupportEscalationNodeService {
  private repository = new Map<string, SupportEscalationNodeModel>();

  public create(data: Omit<SupportEscalationNodeModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationNodeModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationNodeModel>): SupportEscalationNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationNodeModel = {
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

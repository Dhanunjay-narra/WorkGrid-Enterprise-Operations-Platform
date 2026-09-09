import { SupportEscalationPayloadModel, SupportEscalationPayloadValidator } from "@nexora/types/domains/support/escalation/SupportEscalationPayload";

export class SupportEscalationPayloadService {
  private repository = new Map<string, SupportEscalationPayloadModel>();

  public create(data: Omit<SupportEscalationPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationPayloadModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationPayloadModel>): SupportEscalationPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationPayloadModel = {
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

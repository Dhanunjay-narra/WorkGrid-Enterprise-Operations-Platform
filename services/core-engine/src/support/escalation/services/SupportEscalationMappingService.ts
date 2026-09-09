import { SupportEscalationMappingModel, SupportEscalationMappingValidator } from "@nexora/types/domains/support/escalation/SupportEscalationMapping";

export class SupportEscalationMappingService {
  private repository = new Map<string, SupportEscalationMappingModel>();

  public create(data: Omit<SupportEscalationMappingModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationMappingModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationMappingModel>): SupportEscalationMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationMappingModel = {
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

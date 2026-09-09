import { ComplianceEventModel, ComplianceEventValidator } from "@nexora/types/domains/compliance/ComplianceEvent";

export class ComplianceEventService {
  private repository = new Map<string, ComplianceEventModel>();

  public create(data: Omit<ComplianceEventModel, "id" | "version" | "createdAt" | "updatedAt">): ComplianceEventModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ComplianceEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ComplianceEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ComplianceEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ComplianceEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ComplianceEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ComplianceEventModel>): ComplianceEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ComplianceEventModel = {
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

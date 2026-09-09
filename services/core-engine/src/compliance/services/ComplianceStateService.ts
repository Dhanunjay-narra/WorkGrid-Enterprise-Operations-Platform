import { ComplianceStateModel, ComplianceStateValidator } from "@nexora/types/domains/compliance/ComplianceState";

export class ComplianceStateService {
  private repository = new Map<string, ComplianceStateModel>();

  public create(data: Omit<ComplianceStateModel, "id" | "version" | "createdAt" | "updatedAt">): ComplianceStateModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ComplianceStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ComplianceStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ComplianceState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ComplianceStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ComplianceStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ComplianceStateModel>): ComplianceStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ComplianceStateModel = {
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

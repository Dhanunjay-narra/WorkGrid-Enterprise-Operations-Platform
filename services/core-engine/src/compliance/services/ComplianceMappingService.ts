import { ComplianceMappingModel, ComplianceMappingValidator } from "@nexora/types/domains/compliance/ComplianceMapping";

export class ComplianceMappingService {
  private repository = new Map<string, ComplianceMappingModel>();

  public create(data: Omit<ComplianceMappingModel, "id" | "version" | "createdAt" | "updatedAt">): ComplianceMappingModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ComplianceMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ComplianceMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ComplianceMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ComplianceMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ComplianceMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ComplianceMappingModel>): ComplianceMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ComplianceMappingModel = {
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

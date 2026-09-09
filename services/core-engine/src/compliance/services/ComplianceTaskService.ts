import { ComplianceTaskModel, ComplianceTaskValidator } from "@nexora/types/domains/compliance/ComplianceTask";

export class ComplianceTaskService {
  private repository = new Map<string, ComplianceTaskModel>();

  public create(data: Omit<ComplianceTaskModel, "id" | "version" | "createdAt" | "updatedAt">): ComplianceTaskModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ComplianceTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ComplianceTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ComplianceTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ComplianceTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ComplianceTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ComplianceTaskModel>): ComplianceTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ComplianceTaskModel = {
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

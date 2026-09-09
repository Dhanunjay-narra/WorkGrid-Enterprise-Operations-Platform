import { ComplianceNodeModel, ComplianceNodeValidator } from "@nexora/types/domains/compliance/ComplianceNode";

export class ComplianceNodeService {
  private repository = new Map<string, ComplianceNodeModel>();

  public create(data: Omit<ComplianceNodeModel, "id" | "version" | "createdAt" | "updatedAt">): ComplianceNodeModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ComplianceNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ComplianceNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ComplianceNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ComplianceNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ComplianceNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ComplianceNodeModel>): ComplianceNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ComplianceNodeModel = {
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

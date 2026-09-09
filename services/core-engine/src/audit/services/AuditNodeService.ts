import { AuditNodeModel, AuditNodeValidator } from "@nexora/types/domains/audit/AuditNode";

export class AuditNodeService {
  private repository = new Map<string, AuditNodeModel>();

  public create(data: Omit<AuditNodeModel, "id" | "version" | "createdAt" | "updatedAt">): AuditNodeModel {
    const id = "audi_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuditNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuditNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuditNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuditNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuditNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuditNodeModel>): AuditNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuditNodeModel = {
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

import { DmsRetentionNodeModel, DmsRetentionNodeValidator } from "@nexora/types/domains/dms/retention/DmsRetentionNode";

export class DmsRetentionNodeService {
  private repository = new Map<string, DmsRetentionNodeModel>();

  public create(data: Omit<DmsRetentionNodeModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionNodeModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionNodeModel>): DmsRetentionNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionNodeModel = {
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

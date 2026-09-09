import { DmsRetentionTaskModel, DmsRetentionTaskValidator } from "@nexora/types/domains/dms/retention/DmsRetentionTask";

export class DmsRetentionTaskService {
  private repository = new Map<string, DmsRetentionTaskModel>();

  public create(data: Omit<DmsRetentionTaskModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionTaskModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionTaskModel>): DmsRetentionTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionTaskModel = {
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

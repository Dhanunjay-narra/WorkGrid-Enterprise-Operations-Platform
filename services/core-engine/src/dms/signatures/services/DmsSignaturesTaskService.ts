import { DmsSignaturesTaskModel, DmsSignaturesTaskValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesTask";

export class DmsSignaturesTaskService {
  private repository = new Map<string, DmsSignaturesTaskModel>();

  public create(data: Omit<DmsSignaturesTaskModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesTaskModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesTaskModel>): DmsSignaturesTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesTaskModel = {
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

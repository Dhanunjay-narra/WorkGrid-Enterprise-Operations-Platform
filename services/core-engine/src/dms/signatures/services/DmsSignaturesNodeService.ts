import { DmsSignaturesNodeModel, DmsSignaturesNodeValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesNode";

export class DmsSignaturesNodeService {
  private repository = new Map<string, DmsSignaturesNodeModel>();

  public create(data: Omit<DmsSignaturesNodeModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesNodeModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesNodeModel>): DmsSignaturesNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesNodeModel = {
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

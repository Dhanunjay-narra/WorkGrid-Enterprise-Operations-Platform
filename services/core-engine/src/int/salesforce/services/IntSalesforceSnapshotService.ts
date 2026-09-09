import { IntSalesforceSnapshotModel, IntSalesforceSnapshotValidator } from "@nexora/types/domains/int/salesforce/IntSalesforceSnapshot";

export class IntSalesforceSnapshotService {
  private repository = new Map<string, IntSalesforceSnapshotModel>();

  public create(data: Omit<IntSalesforceSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): IntSalesforceSnapshotModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSalesforceSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSalesforceSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSalesforceSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSalesforceSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSalesforceSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSalesforceSnapshotModel>): IntSalesforceSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSalesforceSnapshotModel = {
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

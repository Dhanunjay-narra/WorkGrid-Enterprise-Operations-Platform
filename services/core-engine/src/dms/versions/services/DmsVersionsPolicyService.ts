import { DmsVersionsPolicyModel, DmsVersionsPolicyValidator } from "@nexora/types/domains/dms/versions/DmsVersionsPolicy";

export class DmsVersionsPolicyService {
  private repository = new Map<string, DmsVersionsPolicyModel>();

  public create(data: Omit<DmsVersionsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): DmsVersionsPolicyModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsVersionsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsVersionsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsVersionsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsVersionsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsVersionsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsVersionsPolicyModel>): DmsVersionsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsVersionsPolicyModel = {
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

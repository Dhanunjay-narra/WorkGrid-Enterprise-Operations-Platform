import { DmsSignaturesStateModel, DmsSignaturesStateValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesState";

export class DmsSignaturesStateService {
  private repository = new Map<string, DmsSignaturesStateModel>();

  public create(data: Omit<DmsSignaturesStateModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesStateModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesStateModel>): DmsSignaturesStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesStateModel = {
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

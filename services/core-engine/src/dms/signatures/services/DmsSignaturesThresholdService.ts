import { DmsSignaturesThresholdModel, DmsSignaturesThresholdValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesThreshold";

export class DmsSignaturesThresholdService {
  private repository = new Map<string, DmsSignaturesThresholdModel>();

  public create(data: Omit<DmsSignaturesThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesThresholdModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesThresholdModel>): DmsSignaturesThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesThresholdModel = {
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

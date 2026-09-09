import { DmsOcrEventModel, DmsOcrEventValidator } from "@nexora/types/domains/dms/ocr/DmsOcrEvent";

export class DmsOcrEventService {
  private repository = new Map<string, DmsOcrEventModel>();

  public create(data: Omit<DmsOcrEventModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrEventModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrEventModel>): DmsOcrEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrEventModel = {
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

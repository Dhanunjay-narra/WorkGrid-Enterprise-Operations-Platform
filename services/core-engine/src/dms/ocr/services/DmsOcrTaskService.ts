import { DmsOcrTaskModel, DmsOcrTaskValidator } from "@nexora/types/domains/dms/ocr/DmsOcrTask";

export class DmsOcrTaskService {
  private repository = new Map<string, DmsOcrTaskModel>();

  public create(data: Omit<DmsOcrTaskModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrTaskModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrTaskModel>): DmsOcrTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrTaskModel = {
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

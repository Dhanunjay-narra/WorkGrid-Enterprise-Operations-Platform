import { DmsOcrSessionModel, DmsOcrSessionValidator } from "@nexora/types/domains/dms/ocr/DmsOcrSession";

export class DmsOcrSessionService {
  private repository = new Map<string, DmsOcrSessionModel>();

  public create(data: Omit<DmsOcrSessionModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrSessionModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrSessionModel>): DmsOcrSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrSessionModel = {
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

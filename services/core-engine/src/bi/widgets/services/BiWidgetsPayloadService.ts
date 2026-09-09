import { BiWidgetsPayloadModel, BiWidgetsPayloadValidator } from "@nexora/types/domains/bi/widgets/BiWidgetsPayload";

export class BiWidgetsPayloadService {
  private repository = new Map<string, BiWidgetsPayloadModel>();

  public create(data: Omit<BiWidgetsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): BiWidgetsPayloadModel {
    const id = "bi_w_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiWidgetsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiWidgetsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiWidgetsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiWidgetsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiWidgetsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiWidgetsPayloadModel>): BiWidgetsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiWidgetsPayloadModel = {
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

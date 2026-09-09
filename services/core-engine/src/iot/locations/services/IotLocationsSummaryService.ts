import { IotLocationsSummaryModel, IotLocationsSummaryValidator } from "@nexora/types/domains/iot/locations/IotLocationsSummary";

export class IotLocationsSummaryService {
  private repository = new Map<string, IotLocationsSummaryModel>();

  public create(data: Omit<IotLocationsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): IotLocationsSummaryModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotLocationsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotLocationsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotLocationsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotLocationsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotLocationsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotLocationsSummaryModel>): IotLocationsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotLocationsSummaryModel = {
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

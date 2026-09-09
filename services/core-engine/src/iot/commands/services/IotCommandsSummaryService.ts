import { IotCommandsSummaryModel, IotCommandsSummaryValidator } from "@nexora/types/domains/iot/commands/IotCommandsSummary";

export class IotCommandsSummaryService {
  private repository = new Map<string, IotCommandsSummaryModel>();

  public create(data: Omit<IotCommandsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsSummaryModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsSummaryModel>): IotCommandsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsSummaryModel = {
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

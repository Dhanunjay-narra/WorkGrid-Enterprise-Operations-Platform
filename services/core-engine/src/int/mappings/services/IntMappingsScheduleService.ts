import { IntMappingsScheduleModel, IntMappingsScheduleValidator } from "@nexora/types/domains/int/mappings/IntMappingsSchedule";

export class IntMappingsScheduleService {
  private repository = new Map<string, IntMappingsScheduleModel>();

  public create(data: Omit<IntMappingsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsScheduleModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsScheduleModel>): IntMappingsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsScheduleModel = {
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

import { PrjTaskData, PrjTaskValidator } from "../../../../packages/types/src/domains/projects/PrjTask";

export class PrjTaskService {
  private repository = new Map<string, PrjTaskData>();

  public create(data: Omit<PrjTaskData, "id" | "createdAt" | "updatedAt">): PrjTaskData {
    const id = "pro_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: PrjTaskData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = PrjTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for PrjTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): PrjTaskData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): PrjTaskData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<PrjTaskData>): PrjTaskData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: PrjTaskData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}

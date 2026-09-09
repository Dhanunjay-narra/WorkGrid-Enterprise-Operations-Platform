import { IotCommandExecutionLogData, IotCommandExecutionLogValidator } from "../../../../packages/types/src/domains/iot/IotCommandExecutionLog";

export class IotCommandExecutionLogService {
  private repository = new Map<string, IotCommandExecutionLogData>();

  public create(data: Omit<IotCommandExecutionLogData, "id" | "createdAt" | "updatedAt">): IotCommandExecutionLogData {
    const id = "iot_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IotCommandExecutionLogData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandExecutionLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandExecutionLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandExecutionLogData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IotCommandExecutionLogData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IotCommandExecutionLogData>): IotCommandExecutionLogData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandExecutionLogData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}

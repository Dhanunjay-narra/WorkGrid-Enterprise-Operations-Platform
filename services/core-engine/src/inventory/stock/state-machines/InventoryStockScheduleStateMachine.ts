export type InventoryStockScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockScheduleStateMachine {
  private allowedTransitions: Record<InventoryStockScheduleState, InventoryStockScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockScheduleState, to: InventoryStockScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockScheduleState, to: InventoryStockScheduleState): InventoryStockScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockSchedule: " + from + " -> " + to);
    }
    return to;
  }
}

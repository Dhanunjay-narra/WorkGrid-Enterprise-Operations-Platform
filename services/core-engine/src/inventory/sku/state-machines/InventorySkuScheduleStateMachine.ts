export type InventorySkuScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuScheduleStateMachine {
  private allowedTransitions: Record<InventorySkuScheduleState, InventorySkuScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuScheduleState, to: InventorySkuScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuScheduleState, to: InventorySkuScheduleState): InventorySkuScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuSchedule: " + from + " -> " + to);
    }
    return to;
  }
}

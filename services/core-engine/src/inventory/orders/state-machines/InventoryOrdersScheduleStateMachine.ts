export type InventoryOrdersScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersScheduleStateMachine {
  private allowedTransitions: Record<InventoryOrdersScheduleState, InventoryOrdersScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersScheduleState, to: InventoryOrdersScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersScheduleState, to: InventoryOrdersScheduleState): InventoryOrdersScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersSchedule: " + from + " -> " + to);
    }
    return to;
  }
}

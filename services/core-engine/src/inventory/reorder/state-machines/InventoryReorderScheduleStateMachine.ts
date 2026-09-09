export type InventoryReorderScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderScheduleStateMachine {
  private allowedTransitions: Record<InventoryReorderScheduleState, InventoryReorderScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderScheduleState, to: InventoryReorderScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderScheduleState, to: InventoryReorderScheduleState): InventoryReorderScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderSchedule: " + from + " -> " + to);
    }
    return to;
  }
}

export type InventorySuppliersScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersScheduleStateMachine {
  private allowedTransitions: Record<InventorySuppliersScheduleState, InventorySuppliersScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersScheduleState, to: InventorySuppliersScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersScheduleState, to: InventorySuppliersScheduleState): InventorySuppliersScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersSchedule: " + from + " -> " + to);
    }
    return to;
  }
}

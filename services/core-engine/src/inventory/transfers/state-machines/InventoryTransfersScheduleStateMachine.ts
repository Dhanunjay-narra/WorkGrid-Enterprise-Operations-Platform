export type InventoryTransfersScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryTransfersScheduleStateMachine {
  private allowedTransitions: Record<InventoryTransfersScheduleState, InventoryTransfersScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryTransfersScheduleState, to: InventoryTransfersScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryTransfersScheduleState, to: InventoryTransfersScheduleState): InventoryTransfersScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryTransfersSchedule: " + from + " -> " + to);
    }
    return to;
  }
}

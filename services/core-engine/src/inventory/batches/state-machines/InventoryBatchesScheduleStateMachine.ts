export type InventoryBatchesScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryBatchesScheduleStateMachine {
  private allowedTransitions: Record<InventoryBatchesScheduleState, InventoryBatchesScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryBatchesScheduleState, to: InventoryBatchesScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryBatchesScheduleState, to: InventoryBatchesScheduleState): InventoryBatchesScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryBatchesSchedule: " + from + " -> " + to);
    }
    return to;
  }
}

export type InventoryOrdersRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersRecordStateMachine {
  private allowedTransitions: Record<InventoryOrdersRecordState, InventoryOrdersRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersRecordState, to: InventoryOrdersRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersRecordState, to: InventoryOrdersRecordState): InventoryOrdersRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersRecord: " + from + " -> " + to);
    }
    return to;
  }
}

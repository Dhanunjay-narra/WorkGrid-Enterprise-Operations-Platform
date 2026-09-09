export type InventorySkuRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySkuRecordStateMachine {
  private allowedTransitions: Record<InventorySkuRecordState, InventorySkuRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySkuRecordState, to: InventorySkuRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySkuRecordState, to: InventorySkuRecordState): InventorySkuRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySkuRecord: " + from + " -> " + to);
    }
    return to;
  }
}

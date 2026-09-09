export type InventoryStockPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockPayloadStateMachine {
  private allowedTransitions: Record<InventoryStockPayloadState, InventoryStockPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockPayloadState, to: InventoryStockPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockPayloadState, to: InventoryStockPayloadState): InventoryStockPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockPayload: " + from + " -> " + to);
    }
    return to;
  }
}

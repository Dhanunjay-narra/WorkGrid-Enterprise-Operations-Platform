export type InventoryOrdersMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersMappingStateMachine {
  private allowedTransitions: Record<InventoryOrdersMappingState, InventoryOrdersMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersMappingState, to: InventoryOrdersMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersMappingState, to: InventoryOrdersMappingState): InventoryOrdersMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersMapping: " + from + " -> " + to);
    }
    return to;
  }
}

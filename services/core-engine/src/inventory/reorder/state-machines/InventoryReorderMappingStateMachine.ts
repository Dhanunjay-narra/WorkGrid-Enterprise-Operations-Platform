export type InventoryReorderMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderMappingStateMachine {
  private allowedTransitions: Record<InventoryReorderMappingState, InventoryReorderMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderMappingState, to: InventoryReorderMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderMappingState, to: InventoryReorderMappingState): InventoryReorderMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderMapping: " + from + " -> " + to);
    }
    return to;
  }
}

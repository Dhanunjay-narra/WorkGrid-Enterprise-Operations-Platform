export type IntMappingsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsItemStateMachine {
  private allowedTransitions: Record<IntMappingsItemState, IntMappingsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsItemState, to: IntMappingsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsItemState, to: IntMappingsItemState): IntMappingsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsItem: " + from + " -> " + to);
    }
    return to;
  }
}

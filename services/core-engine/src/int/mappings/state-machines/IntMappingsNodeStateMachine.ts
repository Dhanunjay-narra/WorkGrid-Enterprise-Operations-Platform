export type IntMappingsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsNodeStateMachine {
  private allowedTransitions: Record<IntMappingsNodeState, IntMappingsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsNodeState, to: IntMappingsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsNodeState, to: IntMappingsNodeState): IntMappingsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsNode: " + from + " -> " + to);
    }
    return to;
  }
}

export type IntSlackMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackMappingStateMachine {
  private allowedTransitions: Record<IntSlackMappingState, IntSlackMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackMappingState, to: IntSlackMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackMappingState, to: IntSlackMappingState): IntSlackMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackMapping: " + from + " -> " + to);
    }
    return to;
  }
}

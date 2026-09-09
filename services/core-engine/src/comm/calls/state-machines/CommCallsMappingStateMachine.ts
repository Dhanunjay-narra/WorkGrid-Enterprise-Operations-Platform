export type CommCallsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsMappingStateMachine {
  private allowedTransitions: Record<CommCallsMappingState, CommCallsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsMappingState, to: CommCallsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsMappingState, to: CommCallsMappingState): CommCallsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsMapping: " + from + " -> " + to);
    }
    return to;
  }
}

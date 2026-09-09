export type CommThreadsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsMappingStateMachine {
  private allowedTransitions: Record<CommThreadsMappingState, CommThreadsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsMappingState, to: CommThreadsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsMappingState, to: CommThreadsMappingState): CommThreadsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsMapping: " + from + " -> " + to);
    }
    return to;
  }
}

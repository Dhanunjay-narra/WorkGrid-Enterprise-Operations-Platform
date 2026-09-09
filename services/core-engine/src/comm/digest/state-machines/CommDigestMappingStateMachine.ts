export type CommDigestMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestMappingStateMachine {
  private allowedTransitions: Record<CommDigestMappingState, CommDigestMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestMappingState, to: CommDigestMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestMappingState, to: CommDigestMappingState): CommDigestMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestMapping: " + from + " -> " + to);
    }
    return to;
  }
}

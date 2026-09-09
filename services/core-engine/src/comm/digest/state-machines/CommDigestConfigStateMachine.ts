export type CommDigestConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestConfigStateMachine {
  private allowedTransitions: Record<CommDigestConfigState, CommDigestConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestConfigState, to: CommDigestConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestConfigState, to: CommDigestConfigState): CommDigestConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestConfig: " + from + " -> " + to);
    }
    return to;
  }
}

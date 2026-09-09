export type CommDigestThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestThresholdStateMachine {
  private allowedTransitions: Record<CommDigestThresholdState, CommDigestThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestThresholdState, to: CommDigestThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestThresholdState, to: CommDigestThresholdState): CommDigestThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestThreshold: " + from + " -> " + to);
    }
    return to;
  }
}

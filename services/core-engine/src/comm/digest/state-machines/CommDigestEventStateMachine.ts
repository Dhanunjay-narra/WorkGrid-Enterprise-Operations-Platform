export type CommDigestEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestEventStateMachine {
  private allowedTransitions: Record<CommDigestEventState, CommDigestEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestEventState, to: CommDigestEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestEventState, to: CommDigestEventState): CommDigestEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestEvent: " + from + " -> " + to);
    }
    return to;
  }
}

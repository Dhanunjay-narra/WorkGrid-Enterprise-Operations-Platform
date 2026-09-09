export type CommDigestEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestEntryStateMachine {
  private allowedTransitions: Record<CommDigestEntryState, CommDigestEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestEntryState, to: CommDigestEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestEntryState, to: CommDigestEntryState): CommDigestEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestEntry: " + from + " -> " + to);
    }
    return to;
  }
}

export type CommDigestProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestProfileStateMachine {
  private allowedTransitions: Record<CommDigestProfileState, CommDigestProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestProfileState, to: CommDigestProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestProfileState, to: CommDigestProfileState): CommDigestProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestProfile: " + from + " -> " + to);
    }
    return to;
  }
}

export type CommPresenceThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceThresholdStateMachine {
  private allowedTransitions: Record<CommPresenceThresholdState, CommPresenceThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceThresholdState, to: CommPresenceThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceThresholdState, to: CommPresenceThresholdState): CommPresenceThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceThreshold: " + from + " -> " + to);
    }
    return to;
  }
}

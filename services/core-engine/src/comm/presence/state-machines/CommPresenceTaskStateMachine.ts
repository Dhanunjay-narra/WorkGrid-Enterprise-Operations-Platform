export type CommPresenceTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceTaskStateMachine {
  private allowedTransitions: Record<CommPresenceTaskState, CommPresenceTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceTaskState, to: CommPresenceTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceTaskState, to: CommPresenceTaskState): CommPresenceTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceTask: " + from + " -> " + to);
    }
    return to;
  }
}

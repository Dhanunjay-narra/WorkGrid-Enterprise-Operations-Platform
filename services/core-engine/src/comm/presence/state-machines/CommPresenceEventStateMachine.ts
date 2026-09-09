export type CommPresenceEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceEventStateMachine {
  private allowedTransitions: Record<CommPresenceEventState, CommPresenceEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceEventState, to: CommPresenceEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceEventState, to: CommPresenceEventState): CommPresenceEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceEvent: " + from + " -> " + to);
    }
    return to;
  }
}

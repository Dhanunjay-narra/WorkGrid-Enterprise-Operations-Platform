export type CommPresenceEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceEntryStateMachine {
  private allowedTransitions: Record<CommPresenceEntryState, CommPresenceEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceEntryState, to: CommPresenceEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceEntryState, to: CommPresenceEntryState): CommPresenceEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceEntry: " + from + " -> " + to);
    }
    return to;
  }
}

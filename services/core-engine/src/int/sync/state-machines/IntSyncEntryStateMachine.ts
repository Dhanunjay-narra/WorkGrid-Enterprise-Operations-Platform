export type IntSyncEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncEntryStateMachine {
  private allowedTransitions: Record<IntSyncEntryState, IntSyncEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncEntryState, to: IntSyncEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncEntryState, to: IntSyncEntryState): IntSyncEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncEntry: " + from + " -> " + to);
    }
    return to;
  }
}

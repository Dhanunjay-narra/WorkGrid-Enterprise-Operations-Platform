export type DmsRetentionEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionEntryStateMachine {
  private allowedTransitions: Record<DmsRetentionEntryState, DmsRetentionEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionEntryState, to: DmsRetentionEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionEntryState, to: DmsRetentionEntryState): DmsRetentionEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionEntry: " + from + " -> " + to);
    }
    return to;
  }
}

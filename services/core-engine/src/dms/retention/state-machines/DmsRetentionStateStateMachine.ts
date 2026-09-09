export type DmsRetentionStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionStateStateMachine {
  private allowedTransitions: Record<DmsRetentionStateState, DmsRetentionStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionStateState, to: DmsRetentionStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionStateState, to: DmsRetentionStateState): DmsRetentionStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionState: " + from + " -> " + to);
    }
    return to;
  }
}

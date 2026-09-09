export type DmsRetentionEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionEventStateMachine {
  private allowedTransitions: Record<DmsRetentionEventState, DmsRetentionEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionEventState, to: DmsRetentionEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionEventState, to: DmsRetentionEventState): DmsRetentionEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionEvent: " + from + " -> " + to);
    }
    return to;
  }
}

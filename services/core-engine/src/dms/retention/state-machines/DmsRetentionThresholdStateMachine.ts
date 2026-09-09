export type DmsRetentionThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionThresholdStateMachine {
  private allowedTransitions: Record<DmsRetentionThresholdState, DmsRetentionThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionThresholdState, to: DmsRetentionThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionThresholdState, to: DmsRetentionThresholdState): DmsRetentionThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionThreshold: " + from + " -> " + to);
    }
    return to;
  }
}

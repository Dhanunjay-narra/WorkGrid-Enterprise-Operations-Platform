export type DmsRetentionConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionConfigStateMachine {
  private allowedTransitions: Record<DmsRetentionConfigState, DmsRetentionConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionConfigState, to: DmsRetentionConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionConfigState, to: DmsRetentionConfigState): DmsRetentionConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionConfig: " + from + " -> " + to);
    }
    return to;
  }
}

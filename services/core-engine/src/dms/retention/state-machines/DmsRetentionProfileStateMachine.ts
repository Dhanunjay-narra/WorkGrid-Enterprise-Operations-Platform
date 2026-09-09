export type DmsRetentionProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionProfileStateMachine {
  private allowedTransitions: Record<DmsRetentionProfileState, DmsRetentionProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionProfileState, to: DmsRetentionProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionProfileState, to: DmsRetentionProfileState): DmsRetentionProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionProfile: " + from + " -> " + to);
    }
    return to;
  }
}

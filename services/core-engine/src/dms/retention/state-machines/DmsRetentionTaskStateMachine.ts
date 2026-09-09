export type DmsRetentionTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionTaskStateMachine {
  private allowedTransitions: Record<DmsRetentionTaskState, DmsRetentionTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionTaskState, to: DmsRetentionTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionTaskState, to: DmsRetentionTaskState): DmsRetentionTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionTask: " + from + " -> " + to);
    }
    return to;
  }
}

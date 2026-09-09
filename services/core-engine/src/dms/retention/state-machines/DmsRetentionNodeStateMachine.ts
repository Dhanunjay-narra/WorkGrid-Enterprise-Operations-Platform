export type DmsRetentionNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionNodeStateMachine {
  private allowedTransitions: Record<DmsRetentionNodeState, DmsRetentionNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionNodeState, to: DmsRetentionNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionNodeState, to: DmsRetentionNodeState): DmsRetentionNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionNode: " + from + " -> " + to);
    }
    return to;
  }
}

export type CrmHealthNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthNodeStateMachine {
  private allowedTransitions: Record<CrmHealthNodeState, CrmHealthNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthNodeState, to: CrmHealthNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthNodeState, to: CrmHealthNodeState): CrmHealthNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthNode: " + from + " -> " + to);
    }
    return to;
  }
}

export type CrmDealsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsNodeStateMachine {
  private allowedTransitions: Record<CrmDealsNodeState, CrmDealsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsNodeState, to: CrmDealsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsNodeState, to: CrmDealsNodeState): CrmDealsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsNode: " + from + " -> " + to);
    }
    return to;
  }
}

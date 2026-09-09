export type CrmDealsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsQueueStateMachine {
  private allowedTransitions: Record<CrmDealsQueueState, CrmDealsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsQueueState, to: CrmDealsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsQueueState, to: CrmDealsQueueState): CrmDealsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsQueue: " + from + " -> " + to);
    }
    return to;
  }
}

export type CrmHealthQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthQueueStateMachine {
  private allowedTransitions: Record<CrmHealthQueueState, CrmHealthQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthQueueState, to: CrmHealthQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthQueueState, to: CrmHealthQueueState): CrmHealthQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthQueue: " + from + " -> " + to);
    }
    return to;
  }
}

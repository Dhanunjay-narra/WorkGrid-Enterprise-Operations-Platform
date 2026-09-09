export type CrmContactsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsQueueStateMachine {
  private allowedTransitions: Record<CrmContactsQueueState, CrmContactsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsQueueState, to: CrmContactsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsQueueState, to: CrmContactsQueueState): CrmContactsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsQueue: " + from + " -> " + to);
    }
    return to;
  }
}

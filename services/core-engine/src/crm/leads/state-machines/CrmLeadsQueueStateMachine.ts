export type CrmLeadsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsQueueStateMachine {
  private allowedTransitions: Record<CrmLeadsQueueState, CrmLeadsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsQueueState, to: CrmLeadsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsQueueState, to: CrmLeadsQueueState): CrmLeadsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsQueue: " + from + " -> " + to);
    }
    return to;
  }
}

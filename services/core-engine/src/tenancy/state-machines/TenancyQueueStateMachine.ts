export type TenancyQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyQueueStateMachine {
  private allowedTransitions: Record<TenancyQueueState, TenancyQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyQueueState, to: TenancyQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyQueueState, to: TenancyQueueState): TenancyQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyQueue: " + from + " -> " + to);
    }
    return to;
  }
}

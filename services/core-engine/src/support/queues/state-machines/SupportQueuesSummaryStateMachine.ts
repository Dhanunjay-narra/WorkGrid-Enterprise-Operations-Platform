export type SupportQueuesSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesSummaryStateMachine {
  private allowedTransitions: Record<SupportQueuesSummaryState, SupportQueuesSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesSummaryState, to: SupportQueuesSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesSummaryState, to: SupportQueuesSummaryState): SupportQueuesSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesSummary: " + from + " -> " + to);
    }
    return to;
  }
}

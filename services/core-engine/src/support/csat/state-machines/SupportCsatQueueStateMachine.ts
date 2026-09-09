export type SupportCsatQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatQueueStateMachine {
  private allowedTransitions: Record<SupportCsatQueueState, SupportCsatQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatQueueState, to: SupportCsatQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatQueueState, to: SupportCsatQueueState): SupportCsatQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatQueue: " + from + " -> " + to);
    }
    return to;
  }
}

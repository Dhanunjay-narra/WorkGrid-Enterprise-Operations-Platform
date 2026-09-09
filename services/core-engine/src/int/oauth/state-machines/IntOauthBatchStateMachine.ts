export type IntOauthBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthBatchStateMachine {
  private allowedTransitions: Record<IntOauthBatchState, IntOauthBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthBatchState, to: IntOauthBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthBatchState, to: IntOauthBatchState): IntOauthBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthBatch: " + from + " -> " + to);
    }
    return to;
  }
}

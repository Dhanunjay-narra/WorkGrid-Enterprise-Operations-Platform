export type CommNotificationsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsBatchStateMachine {
  private allowedTransitions: Record<CommNotificationsBatchState, CommNotificationsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsBatchState, to: CommNotificationsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsBatchState, to: CommNotificationsBatchState): CommNotificationsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsBatch: " + from + " -> " + to);
    }
    return to;
  }
}

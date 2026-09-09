export type IntSyncTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncTaskStateMachine {
  private allowedTransitions: Record<IntSyncTaskState, IntSyncTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncTaskState, to: IntSyncTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncTaskState, to: IntSyncTaskState): IntSyncTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncTask: " + from + " -> " + to);
    }
    return to;
  }
}

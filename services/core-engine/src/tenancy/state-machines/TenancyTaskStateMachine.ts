export type TenancyTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyTaskStateMachine {
  private allowedTransitions: Record<TenancyTaskState, TenancyTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyTaskState, to: TenancyTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyTaskState, to: TenancyTaskState): TenancyTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyTask: " + from + " -> " + to);
    }
    return to;
  }
}
